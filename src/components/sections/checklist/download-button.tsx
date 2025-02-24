'use client';

import type { Tip } from '.';
import jsPDF from 'jspdf';
import { DownloadIcon } from 'lucide-react';

interface DownloadButtonProps {
  tips: Tip[];
}

export function DownloadButton({ tips }: DownloadButtonProps) {
  const handleDownload = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      doc.setFontSize(20);
      doc.text('Checklist', 20, 20);

      doc.setFontSize(12);
      let yPosition = 40;

      tips.forEach((tip) => {
        doc.rect(20, yPosition - 4, 8, 8);

        const splitText = doc.splitTextToSize(
          tip.content,
          doc.internal.pageSize.getWidth() - 50,
        ) as string[];

        if (
          yPosition + splitText.length * 10 >
          doc.internal.pageSize.getHeight() - 20
        ) {
          doc.addPage();
          yPosition = 20;
        }

        doc.text(splitText, 35, yPosition);
        yPosition += splitText.length * 10 + 5;
      });

      const pageCount = doc.internal.pages.length;
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(
          `Page ${i} of ${pageCount}`,
          doc.internal.pageSize.getWidth() / 2,
          doc.internal.pageSize.getHeight() - 10,
          { align: 'center' },
        );
      }

      doc.save('checklist.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      <DownloadIcon className="mr-2 h-4 w-4" />
      Download as PDF
    </button>
  );
}
