import clsx from 'clsx';
import { useMemo } from 'react';
import { ArrowRight, ArrowUpRight } from '@carbon/icons-react';
import { CustomTileIconProps, CustomTileContentProps } from './ct-types';

/**
 * Optimized text trimmer hook
 * - Only trims when necessary
 * - Memoizes result to prevent unnecessary recalculations
 * - Preserves original text if under length limit
 */
const useTextTrimmer = (text: string, length?: number): string => {
  return useMemo(() => {
    if (!length || text.length <= length) return text;
    return `${text.slice(0, length)}...`;
  }, [text, length]);
};

export const CustomTileContent = ({
  title,
  text,
  titleLength,
  textLength,
}: CustomTileContentProps) => {
  const trimmedTitle = useTextTrimmer(title, titleLength);
  const trimmedText = useTextTrimmer(text, textLength);

  return (
    <div className="content">
      <h3 className={clsx('enj-CustomTile-title')}>{trimmedTitle}</h3>
      <p className={clsx('enj-CustomTile-text')}>{trimmedText}</p>
    </div>
  );
};

export const CustomTileIcon = ({
  title,
  linkIsExternal,
}: CustomTileIconProps) => {
  const C = linkIsExternal ? ArrowUpRight : ArrowRight;
  return (
    <C
      className="enj-icon"
      width="1.3rem"
      height="1.3rem"
      aria-label={`${title} pictogram`}
      aria-hidden="true"
    />
  );
};
