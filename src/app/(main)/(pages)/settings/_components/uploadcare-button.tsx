"use client";

import React, { useEffect, useRef } from "react";
// import * as LR from '@uploadcare/blocks'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
    const router = useRouter();

    return (
        <div>
            <Button>Upload</Button>
        </div>
    )
}

export default UploadCareButton;
