"use server";

import { Option } from "@/components/ui/multiple-selector";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import axios from "axios";
import { channel } from "diagnostics_channel";

export const onSlackConnect = async (
  app_id: string,
  authed_user_id: string,
  authed_user_token: string,
  slack_access_token: string,
  bot_user_id: string,
  team_id: string,
  team_name: string,
  user_id: string
): Promise<void> => {
  if (!slack_access_token) return;

  const slackConnection = await db.slack.findFirst({
    where: {
      slackAccessToken: slack_access_token,
    },
    include: {
      connections: true,
    },
  });

  if (!slackConnection) {
    await db.slack.create({
      data: {
        userId: user_id,
        appId: app_id,
        authedUserId: authed_user_id,
        authedUserToken: authed_user_token,
        slackAccessToken: slack_access_token,
        botUserId: bot_user_id,
        teamId: team_id,
        teamName: team_name,
        connections: {
          create: { userId: user_id, type: "Slack" },
        },
      },
    });
  }
};

export const getSlackConnection = async () => {
  const user = await currentUser();
  if (user) {
    return await db.slack.findFirst({
      where: {
        userId: user.id,
      },
    });
  }

  return null;
};

export async function listBotChannels(
  slackAccessToken: string
): Promise<Option[]> {
  const url = `https://slack.com/api/conversations.list?${new URLSearchParams({
    types: "public_channel,private_channel",
    limit: "200",
  })}`;

  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${slackAccessToken}` },
    });

    console.log(data);

    if (!data.ok) throw new Error(data.error);

    if (!data?.channels?.length) return [];

    return data.channels
      .filter((ch: any) => ch.is_member)
      .map((ch: any) => {
        return { label: ch.name, value: ch.id };
      });
  } catch (error: any) {
    console.error("Error listing bot channels:", error.message);
    throw error;
  }
}

export const postMessageInSlackChannel = async (
  slackAccessToken: string,
  slackChannel: string,
  message: string
): Promise<void> => {
  try {
    await axios.post(
      "https://slack.com/api/chat.postMessage",
      { channel: slackChannel, text: message },
      {
        headers: {
          Authorization: `Bearer ${slackAccessToken}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    console.log(`Message posted successfully to Slack channel ${slackChannel}`);
  } catch (error: any) {
    console.error(
      `Error posting message to Slack channel ${slackChannel}:`,
      error?.response?.data || error.message
    );
  }
};