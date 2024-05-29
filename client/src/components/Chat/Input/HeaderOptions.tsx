import { useRecoilState } from 'recoil';
import { Settings2 } from 'lucide-react';
import { Root, Anchor } from '@radix-ui/react-popover';
import { useState, useEffect, useMemo } from 'react';
import { tPresetUpdateSchema, EModelEndpoint } from 'librechat-data-provider';
import type { TPreset, TInterfaceConfig } from 'librechat-data-provider';
import { EndpointSettings, SaveAsPresetDialog, AlternativeSettings } from '~/components/Endpoints';
import { ModelSelect } from '~/components/Input/ModelSelect';
import { PluginStoreDialog } from '~/components';
import OptionsPopover from './OptionsPopover';
import PopoverButtons from './PopoverButtons';
import { useSetIndexOptions } from '~/hooks';
import { useChatContext } from '~/Providers';
import { Button } from '~/components/ui';
import { cn, cardStyle } from '~/utils/';
import store from '~/store';

export default function HeaderOptions({
  interfaceConfig,
}: {
  interfaceConfig?: Partial<TInterfaceConfig>;
}) {
  const [saveAsDialogShow, setSaveAsDialogShow] = useState<boolean>(false);
  const [showPluginStoreDialog, setShowPluginStoreDialog] = useRecoilState(
    store.showPluginStoreDialog,
  );

  const { showPopover, conversation, latestMessage, setShowPopover, setShowBingToneSetting } =
    useChatContext();
  const { setOption } = useSetIndexOptions();

  const { endpoint, conversationId, jailbreak } = conversation ?? {};

  const altConditions: { [key: string]: boolean } = {
    bingAI: !!(latestMessage && conversation?.jailbreak && endpoint === 'bingAI'),
  };

  const altSettings: { [key: string]: () => void } = {
    bingAI: () => setShowBingToneSetting((prev) => !prev),
  };

  const noSettings = useMemo<{ [key: string]: boolean }>(
    () => ({
      [EModelEndpoint.chatGPTBrowser]: true,
      [EModelEndpoint.bingAI]: jailbreak ? false : conversationId !== 'new',
    }),
    [jailbreak, conversationId],
  );

  useEffect(() => {
    if (endpoint && noSettings[endpoint]) {
      setShowPopover(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, noSettings]);

  const saveAsPreset = () => {
    setSaveAsDialogShow(true);
  };

  if (!endpoint) {
    return null;
  }

  const triggerAdvancedMode = altConditions[endpoint]
    ? altSettings[endpoint]
    : () => setShowPopover((prev) => !prev);
  return <Root></Root>;
}
