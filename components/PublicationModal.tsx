'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PublicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  publication: {
    title: string;
    author: string;
    date: string;
    category: string;
    summary?: string;
    pdfUrl?: string;
  } | null;
}

export default function PublicationModal({ isOpen, onClose, publication }: PublicationModalProps) {
  if (!publication) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[825px] max-h-[75vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white pr-8 text-justify">
              {publication.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 -mx-6 px-6">
          <div className="space-y-6 pt-4">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-semibold">
              {publication.category}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {publication.author}
            </span>
            <span className="text-gray-500 dark:text-gray-500">
              {publication.date}
            </span>
          </div>

          {/* Executive Summary */}
          {publication.summary && (
            <div className="border-l-4 border-brand-green pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Executive Summary
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-justify">
                {publication.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Download CTA */}
          {publication.pdfUrl && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Read the complete report for detailed analysis, methodology, and recommendations.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white"
              >
                <a 
                  href={publication.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Full Report (PDF)
                </a>
              </Button>
            </div>
          )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
