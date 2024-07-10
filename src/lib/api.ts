import { App, AppMetadata, Template } from '@/types';

// Existing authentication functions
export const signUp = async (username: string, password: string, email: string) => {
    // Implement AWS Amplify sign up logic here
    console.log('Sign up:', { username, email })
    return { success: true }
}

export const signIn = async (username: string, password: string) => {
    // Implement AWS Amplify sign in logic here
    console.log('Sign in:', { username })
    return { success: true, user: { id: '1', name: 'John Doe', email: 'john@example.com' } }
}

export const signOut = async () => {
    // Implement AWS Amplify sign out logic here
    console.log('Sign out')
    return { success: true }
}

// Existing app fetching functions
export const fetchApps = async (): Promise<App[]> => {
    const response = await fetch('/data/apps.json');
    const apps = await response.json();
    return apps;
};

export const fetchAppMetadata = async (appId: string): Promise<AppMetadata> => {
    const response = await fetch(`/data/${appId}/appmetadata.json`);
    const metadata = await response.json();
    return metadata;
};

// New function to fetch templates
export const fetchTemplates = async (): Promise<Template[]> => {
    const response = await fetch('/data/templates.json');
    const templates = await response.json();
    return templates;
};