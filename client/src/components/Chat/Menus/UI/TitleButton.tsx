import { Trigger } from '@radix-ui/react-popover';

export default function TitleButton({ primaryText = '', secondaryText = '' }) {
  return (
    <div
      className="group flex cursor-pointer items-center gap-1 rounded-xl px-3 py-2 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700"
      // type="button"
    >
      <div> Apollo</div>
    </div>
  );
}
