"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import AppEditor from '@/components/userapp/AppEditor';

const AppEditorPage: React.FC = () => {
  const params = useParams();
  const appId = params.appId as string;

  return <AppEditor appId={appId} />;
};

export default AppEditorPage;