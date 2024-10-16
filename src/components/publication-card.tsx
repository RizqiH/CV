import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  journal?: string;
  year: number;
  link?: string;
  status: 'published' | 'preprint' | 'accepted' |  'under-review';
}

export function PublicationCard({ title, journal, year, link, status }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {link && (
            <div className="hidden font-mono text-xs underline print:visible">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          )}
          <CardDescription className="font-mono text-xs print:text-[10px]">
            {journal ? `${journal}, ` : ''}{year}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
          >
            {status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}