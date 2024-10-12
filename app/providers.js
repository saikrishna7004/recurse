"use client";
import { ThemeProvider } from '@/components/theme-provider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }) {

    return (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
            {children}
            <ProgressBar
                height="2px"
                color="#E69B2E"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </ThemeProvider>
    )
}