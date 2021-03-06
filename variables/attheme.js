module.exports = colors => {
    colors = colors.map(color => color.slice(1));

    return `
        actionBarActionModeDefault=#ff${colors[0]}
        actionBarActionModeDefaultIcon=#ff${colors[1]}
        actionBarActionModeDefaultSelector=#ff${colors[1]}
        actionBarActionModeDefaultTop=#ff${colors[0]}
        actionBarDefault=#ff${colors[0]}
        actionBarDefaultArchived=#ff${colors[0]}
        actionBarDefaultArchivedIcon=#ff${colors[1]}
        actionBarDefaultArchivedSearch=#ff${colors[1]}
        actionBarDefaultArchivedSelector=#ff${colors[1]}
        actionBarDefaultArchivedTitle=#ff${colors[1]}
        actionBarDefaultIcon=#ff${colors[1]}
        actionBarDefaultSearch=#ff${colors[1]}
        actionBarDefaultSearchArchivedPlaceholder=#ff${colors[1]}
        actionBarDefaultSearchPlaceholder=#ff${colors[1]}
        actionBarDefaultSelector=#ff${colors[1]}
        actionBarDefaultSubmenuBackground=#ff${colors[0]}
        actionBarDefaultSubmenuItem=#ff${colors[1]}
        actionBarDefaultSubtitle=#ff${colors[1]}
        actionBarDefaultTitle=#ff${colors[1]}
        actionBarWhiteSelector=#ff${colors[2]}
        avatar_actionBarIconBlue=#ff${colors[1]}
        avatar_actionBarIconCyan=#ff${colors[1]}
        avatar_actionBarIconGreen=#ff${colors[1]}
        avatar_actionBarIconOrange=#ff${colors[1]}
        avatar_actionBarIconPink=#ff${colors[1]}
        avatar_actionBarIconRed=#ff${colors[1]}
        avatar_actionBarIconViolet=#ff${colors[1]}
        avatar_actionBarSelectorBlue=#ff${colors[1]}
        avatar_actionBarSelectorCyan=#ff${colors[1]}
        avatar_actionBarSelectorGreen=#ff${colors[1]}
        avatar_actionBarSelectorOrange=#ff${colors[1]}
        avatar_actionBarSelectorPink=#ff${colors[1]}
        avatar_actionBarSelectorRed=#ff${colors[1]}
        avatar_actionBarSelectorViolet=#ff${colors[1]}
        avatar_backgroundActionBarBlue=#ff${colors[0]}
        avatar_backgroundActionBarCyan=#ff${colors[0]}
        avatar_backgroundActionBarGreen=#ff${colors[0]}
        avatar_backgroundActionBarOrange=#ff${colors[0]}
        avatar_backgroundActionBarPink=#ff${colors[0]}
        avatar_backgroundActionBarRed=#ff${colors[0]}
        avatar_backgroundActionBarViolet=#ff${colors[0]}
        avatar_backgroundArchived=#ff${colors[1]}
        avatar_backgroundArchivedHidden=#ff${colors[1]}
        avatar_backgroundBlue=#ff${colors[1]}
        avatar_backgroundCyan=#ff${colors[1]}
        avatar_backgroundGreen=#ff${colors[1]}
        avatar_backgroundGroupCreateSpanBlue=#b4${colors[1]}
        avatar_backgroundInProfileBlue=#ff${colors[1]}
        avatar_backgroundInProfileCyan=#ff${colors[1]}
        avatar_backgroundInProfileGreen=#ff${colors[1]}
        avatar_backgroundInProfileOrange=#ff${colors[1]}
        avatar_backgroundInProfilePink=#ff${colors[1]}
        avatar_backgroundInProfileRed=#ff${colors[1]}
        avatar_backgroundInProfileViolet=#ff${colors[1]}
        avatar_backgroundOrange=#ff${colors[1]}
        avatar_backgroundPink=#ff${colors[1]}
        avatar_backgroundRed=#ff${colors[1]}
        avatar_backgroundSaved=#ff${colors[1]}
        avatar_backgroundViolet=#ff${colors[1]}
        avatar_nameInMessageBlue=#ff${colors[1]}
        avatar_nameInMessageCyan=#ff${colors[1]}
        avatar_nameInMessageGreen=#ff${colors[1]}
        avatar_nameInMessageOrange=#ff${colors[1]}
        avatar_nameInMessagePink=#ff${colors[1]}
        avatar_nameInMessageRed=#ff${colors[1]}
        avatar_nameInMessageViolet=#ff${colors[1]}
        avatar_subtitleInProfileBlue=#ff${colors[1]}
        avatar_subtitleInProfileCyan=#ff${colors[1]}
        avatar_subtitleInProfileGreen=#ff${colors[1]}
        avatar_subtitleInProfileOrange=#ff${colors[1]}
        avatar_subtitleInProfilePink=#ff${colors[1]}
        avatar_subtitleInProfileRed=#ff${colors[1]}
        avatar_subtitleInProfileViolet=#ff${colors[1]}
        avatar_text=#ff${colors[0]}
        calls_callReceivedGreenIcon=#ff${colors[1]}
        calls_callReceivedRedIcon=#ff${colors[1]}
        changephoneinfo_image=#ff${colors[2]}
        chat_addContact=#ff${colors[1]}
        chat_adminSelectedText=#ff${colors[1]}
        chat_adminText=#ff${colors[1]}
        chat_attachAudioBackground=#ff${colors[2]}
        chat_attachAudioIcon=#ff${colors[0]}
        chat_attachCameraIcon1=#ff${colors[2]}
        chat_attachCameraIcon2=#ff${colors[2]}
        chat_attachCameraIcon3=#ff${colors[2]}
        chat_attachCameraIcon4=#ff${colors[2]}
        chat_attachCameraIcon5=#ff${colors[2]}
        chat_attachCameraIcon6=#ff${colors[2]}
        chat_attachContactBackground=#ff${colors[2]}
        chat_attachContactIcon=#ff${colors[0]}
        chat_attachFileBackground=#ff${colors[2]}
        chat_attachFileIcon=#ff${colors[0]}
        chat_attachGalleryBackground=#ff${colors[2]}
        chat_attachGalleryIcon=#ff${colors[0]}
        chat_attachHideBackground=#ff${colors[2]}
        chat_attachHideIcon=#ff${colors[0]}
        chat_attachLocationBackground=#ff${colors[2]}
        chat_attachLocationIcon=#ff${colors[0]}
        chat_attachMediaBanBackground=#ff${colors[2]}
        chat_attachMediaBantext=#ff${colors[0]}
        chat_attachSendBackground=#ff${colors[2]}
        chat_attachSendIcon=#ff${colors[0]}
        chat_attachVideoBackground=#ff${colors[2]}
        chat_attachVideoIcon=#ff${colors[0]}
        chat_botButtonText=#ff${colors[1]}
        chat_botKeyboardButtonBackground=#ff${colors[1]}
        chat_botKeyboardButtonBackgroundPressed=#ff${colors[2]}
        chat_botKeyboardButtonText=#ff${colors[0]}
        chat_botProgress=#ff${colors[1]}
        chat_botSwitchToInlineText=#ff${colors[2]}
        chat_editDoneIcon=#ff${colors[1]}
        chat_emojiPanelBackground=#ff${colors[0]}
        chat_emojiPanelBackspace=#ff${colors[1]}
        chat_emojiPanelBadgeBackground=#ff${colors[1]}
        chat_emojiPanelBadgeText=#ff${colors[0]}
        chat_emojiPanelEmptyText=#ff${colors[1]}
        chat_emojiPanelIcon=#ff${colors[2]}
        chat_emojiPanelIconSelected=#ff${colors[1]}
        chat_emojiPanelIconSelector=#ff${colors[1]}
        chat_emojiPanelMasksIcon=#ff${colors[2]}
        chat_emojiPanelMasksIconSelected=#ff${colors[2]}
        chat_emojiPanelNewTrending=#00${colors[1]}
        chat_emojiPanelShadowLine=#ff${colors[0]}
        chat_emojiPanelStickerPackSelector=#64${colors[2]}
        chat_emojiPanelStickerSetName=#ff${colors[2]}
        chat_emojiPanelStickerSetNameIcon=#ff${colors[1]}
        chat_emojiPanelTrendingDescription=#ff${colors[1]}
        chat_emojiPanelTrendingTitle=#ff${colors[1]}
        chat_emojiSearchBackground=#ff${colors[1]}
        chat_fieldOverlayText=#ff${colors[1]}
        chat_goDownButton=#ff${colors[0]}
        chat_goDownButtonCounter=#ff${colors[1]}
        chat_goDownButtonCounterBackground=#ff${colors[0]}
        chat_goDownButtonIcon=#ff${colors[1]}
        chat_goDownButtonShadow=#ff${colors[1]}
        chat_inAudioDurationSelectedText=#ff${colors[1]}
        chat_inAudioDurationText=#ff${colors[1]}
        chat_inAudioPerfomerSelectedText=#ff${colors[1]}
        chat_inAudioPerfomerText=#ff${colors[1]}
        chat_inAudioPerformerSelectedText=#ff${colors[1]}
        chat_inAudioProgress=#ff${colors[0]}
        chat_inAudioSeekbar=#ff${colors[2]}
        chat_inAudioSeekbarFill=#ff${colors[1]}
        chat_inAudioSeekbarSelected=#ff${colors[2]}
        chat_inAudioSelectedProgress=#ff${colors[0]}
        chat_inAudioTitleText=#ff${colors[1]}
        chat_inBubble=#ff${colors[0]}
        chat_inBubbleSelected=#e1${colors[0]}
        chat_inBubbleShadow=#ff${colors[2]}
        chat_inContactBackground=#ff${colors[1]}
        chat_inContactIcon=#ff${colors[0]}
        chat_inContactNameText=#ff${colors[1]}
        chat_inContactPhoneText=#ff${colors[1]}
        chat_inFileBackground=#ff${colors[0]}
        chat_inFileBackgroundSelected=#ff${colors[0]}
        chat_inFileIcon=#ff${colors[1]}
        chat_inFileInfoSelectedText=#ff${colors[1]}
        chat_inFileInfoText=#ff${colors[1]}
        chat_inFileNameText=#ff${colors[1]}
        chat_inFileProgress=#ff${colors[0]}
        chat_inFileProgressSelected=#ff${colors[0]}
        chat_inFileSelectedIcon=#ff${colors[1]}
        chat_inForwardedNameText=#ff${colors[1]}
        chat_inInstant=#ff${colors[1]}
        chat_inInstantSelected=#ff${colors[1]}
        chat_inlineResultIcon=#ff${colors[1]}
        chat_inLoader=#ff${colors[1]}
        chat_inLoaderPhoto=#ff${colors[0]}
        chat_inLoaderPhotoIcon=#ff${colors[1]}
        chat_inLoaderPhotoIconSelected=#ff${colors[1]}
        chat_inLoaderPhotoSelected=#ff${colors[0]}
        chat_inLoaderSelected=#ff${colors[2]}
        chat_inLocationBackground=#ff${colors[0]}
        chat_inLocationIcon=#ff${colors[0]}
        chat_inMenu=#ff${colors[1]}
        chat_inMenuSelected=#ff${colors[1]}
        chat_inPreviewInstantSelectedText=#ff${colors[1]}
        chat_inPreviewInstantText=#ff${colors[1]}
        chat_inPreviewLine=#ff${colors[1]}
        chat_inReplyLine=#ff${colors[1]}
        chat_inReplyMediaMessageSelectedText=#ff${colors[1]}
        chat_inReplyMediaMessageText=#ff${colors[1]}
        chat_inReplyMessageText=#ff${colors[1]}
        chat_inReplyNameText=#ff${colors[1]}
        chat_inSentClock=#ff${colors[1]}
        chat_inSentClockSelected=#ff${colors[1]}
        chat_inSiteNameText=#ff${colors[1]}
        chat_inTimeSelectedText=#ff${colors[1]}
        chat_inTimeText=#ff${colors[1]}
        chat_inVenueInfoSelectedText=#ff${colors[2]}
        chat_inVenueInfoText=#ff${colors[2]}
        chat_inVenueNameText=#ff${colors[2]}
        chat_inViaBotNameText=#ff${colors[1]}
        chat_inViews=#ff${colors[1]}
        chat_inViewsSelected=#ff${colors[1]}
        chat_inVoiceSeekbar=#ff${colors[2]}
        chat_inVoiceSeekbarFill=#ff${colors[1]}
        chat_inVoiceSeekbarSelected=#ff${colors[2]}
        chat_linkSelectBackground=#32${colors[1]}
        chat_lockIcon=#ff${colors[1]}
        chat_mediaLoaderPhotoIcon=#ff${colors[1]}
        chat_mediaLoaderPhotoIconSelected=#ff${colors[1]}
        chat_mediaTimeText=#ffffffff
        chat_messageLinkIn=#ff${colors[2]}
        chat_messageLinkOut=#ff${colors[2]}
        chat_messagePanelBackground=#ff${colors[0]}
        chat_messagePanelCancelInlineBot=#ff${colors[1]}
        chat_messagePanelHint=#ff${colors[2]}
        chat_messagePanelIcons=#ff${colors[1]}
        chat_messagePanelSend=#ff${colors[1]}
        chat_messagePanelShadow=#ff${colors[0]}
        chat_messagePanelText=#ff${colors[1]}
        chat_messagePanelVoiceBackground=#ff${colors[0]}
        chat_messagePanelVoiceDelete=#ff${colors[1]}
        chat_messagePanelVoiceDuration=#ff${colors[1]}
        chat_messagePanelVoicePressed=#ff${colors[1]}
        chat_messagePanelVoiceShadow=#0f${colors[1]}
        chat_messageTextIn=#ff${colors[1]}
        chat_messageTextOut=#ff${colors[1]}
        chat_muteIcon=#ff${colors[1]}
        chat_outAudioDurationSelectedText=#ff${colors[1]}
        chat_outAudioDurationText=#ff${colors[1]}
        chat_outAudioPerfomerText=#ff${colors[1]}
        chat_outAudioPerformerSelectedText=#ff${colors[1]}
        chat_outAudioProgress=#ff${colors[0]}
        chat_outAudioSeekbar=#ff${colors[2]}
        chat_outAudioSeekbarFill=#ff${colors[1]}
        chat_outAudioSeekbarSelected=#ff${colors[2]}
        chat_outAudioSelectedProgress=#ff${colors[0]}
        chat_outAudioTitleText=#ff${colors[1]}
        chat_outBubble=#ff${colors[0]}
        chat_outBubbleSelected=#e1${colors[0]}
        chat_outBubbleShadow=#ff${colors[2]}
        chat_outContactBackground=#ff${colors[1]}
        chat_outContactIcon=#ff${colors[0]}
        chat_outContactNameText=#ff${colors[1]}
        chat_outContactPhoneText=#ff${colors[1]}
        chat_outFileBackground=#ff${colors[0]}
        chat_outFileBackgroundSelected=#ff${colors[0]}
        chat_outFileIcon=#ff${colors[1]}
        chat_outFileInfoSelectedText=#ff${colors[1]}
        chat_outFileInfoText=#ff${colors[1]}
        chat_outFileNameText=#ff${colors[1]}
        chat_outFileProgress=#ff${colors[0]}
        chat_outFileProgressSelected=#ff${colors[0]}
        chat_outFileSelectedIcon=#ff${colors[1]}
        chat_outForwardedNameText=#ff${colors[1]}
        chat_outInstant=#ff${colors[1]}
        chat_outInstantSelected=#ff${colors[1]}
        chat_outLoader=#ff${colors[1]}
        chat_outLoaderPhoto=#ff${colors[0]}
        chat_outLoaderPhotoIcon=#ff${colors[1]}
        chat_outLoaderPhotoIconSelected=#ff${colors[1]}
        chat_outLoaderPhotoSelected=#ff${colors[0]}
        chat_outLoaderSelected=#ff${colors[2]}
        chat_outLocationBackground=#ff${colors[0]}
        chat_outLocationIcon=#ff${colors[0]}
        chat_outMenu=#ff${colors[1]}
        chat_outMenuSelected=#ff${colors[1]}
        chat_outPreviewInstantSelectedText=#ff${colors[1]}
        chat_outPreviewInstantText=#ff${colors[1]}
        chat_outPreviewLine=#ff${colors[1]}
        chat_outReplyLine=#ff${colors[1]}
        chat_outReplyMediaMessageSelectedText=#ff${colors[1]}
        chat_outReplyMediaMessageText=#ff${colors[1]}
        chat_outReplyMessageText=#ff${colors[1]}
        chat_outReplyNameText=#ff${colors[1]}
        chat_outSentCheck=#ff${colors[1]}
        chat_outSentCheckSelected=#ff${colors[1]}
        chat_outSentClock=#ff${colors[1]}
        chat_outSentClockSelected=#ff${colors[1]}
        chat_outSiteNameText=#ff${colors[1]}
        chat_outTimeSelectedText=#ff${colors[1]}
        chat_outTimeText=#ff${colors[1]}
        chat_outVenueInfoSelectedText=#ff${colors[2]}
        chat_outVenueInfoText=#ff${colors[2]}
        chat_outVenueNameText=#ff${colors[2]}
        chat_outViaBotNameText=#ff${colors[1]}
        chat_outViews=#ff${colors[1]}
        chat_outViewsSelected=#ff${colors[1]}
        chat_outVoiceSeekbar=#ff${colors[2]}
        chat_outVoiceSeekbarFill=#ff${colors[1]}
        chat_outVoiceSeekbarSelected=#ff${colors[2]}
        chat_previewDurationText=#ff${colors[1]}
        chat_previewGameText=#ff${colors[1]}
        chat_recordedVoiceBackground=#ff${colors[0]}
        chat_recordedVoiceDot=#ff${colors[1]}
        chat_recordedVoicePlayPause=#ff${colors[1]}
        chat_recordedVoicePlayPausePressed=#ff${colors[2]}
        chat_recordedVoiceProgress=#ff${colors[2]}
        chat_recordedVoiceProgressInner=#ff${colors[1]}
        chat_recordTime=#ff${colors[1]}
        chat_recordVoiceCancel=#ff${colors[1]}
        chat_replyPanelClose=#ff${colors[1]}
        chat_replyPanelIcons=#ff${colors[1]}
        chat_replyPanelLine=#ff${colors[1]}
        chat_replyPanelMessage=#ff${colors[1]}
        chat_replyPanelName=#ff${colors[1]}
        chat_reportSpam=#ff${colors[1]}
        chat_searchPanelIcons=#ff${colors[1]}
        chat_searchPanelText=#ff${colors[1]}
        chat_secretTimerBackground=#cc${colors[1]}
        chat_secretTimerText=#ff${colors[0]}
        chat_secretTimeText=#ff${colors[1]}
        chat_selectedBackground=#64${colors[1]}
        chat_sentError=#ff${colors[1]}
        chat_sentErrorIcon=#ff${colors[0]}
        chat_serviceBackground=#b4${colors[0]}
        chat_serviceBackgroundSelected=#b4${colors[0]}
        chat_serviceIcon=#ff${colors[1]}
        chat_serviceLink=#ff${colors[1]}
        chat_serviceText=#ff${colors[1]}
        chat_stickerReplyLine=#ff${colors[1]}
        chat_stickerReplyMessageText=#ff${colors[1]}
        chat_stickerReplyNameText=#ff${colors[1]}
        chat_stickersHintPanel=#ff${colors[0]}
        chat_stickerViaBotNameText=#ff${colors[1]}
        chat_textSelectBackground=#64${colors[1]}
        chat_topPanelBackground=#ff${colors[0]}
        chat_topPanelClose=#ff${colors[1]}
        chat_topPanelLine=#ff${colors[1]}
        chat_topPanelMessage=#ff${colors[1]}
        chat_topPanelTitle=#ff${colors[1]}
        chat_unreadMessagesStartArrowIcon=#ff${colors[1]}
        chat_unreadMessagesStartBackground=#ff${colors[0]}
        chat_unreadMessagesStartText=#ff${colors[1]}
        chats_actionBackground=#ff${colors[1]}
        chats_actionIcon=#ff${colors[0]}
        chats_actionMessage=#ff${colors[2]}
        chats_actionPressedBackground=#ff${colors[1]}
        chats_archiveBackground=#ff${colors[1]}
        chats_archiveIcon=#ff${colors[0]}
        chats_archivePinBackground=#c8${colors[1]}
        chats_archiveText=#ff${colors[0]}
        chats_attachMessage=#ff${colors[2]}
        chats_date=#ff${colors[1]}
        chats_draft=#ff${colors[1]}
        chats_mentionIcon=#ff${colors[0]}
        chats_menuBackground=#ff${colors[0]}
        chats_menuCloud=#ff${colors[1]}
        chats_menuCloudBackgroundCats=#ff${colors[1]}
        chats_menuItemCheck=#ff${colors[0]}
        chats_menuItemIcon=#ff${colors[1]}
        chats_menuItemText=#ff${colors[1]}
        chats_menuName=#ff${colors[1]}
        chats_menuPhone=#ff${colors[1]}
        chats_menuPhoneCats=#ff${colors[1]}
        chats_menuTopShadow=#64${colors[0]}
        chats_message=#ff${colors[2]}
        chats_message_threeLines=#ff0000
        chats_muteIcon=#ff${colors[1]}
        chats_name=#ff${colors[1]}
        chats_nameArchived=#ff${colors[1]}
        chats_nameArchived=#ff${colors[1]}
        chats_nameIcon=#ff${colors[1]}
        chats_nameMessage=#ff${colors[1]}
        chats_nameMessage_threeLines=#ff${colors[1]}
        chats_nameMessageArchived=#ff${colors[1]}
        chats_nameMessageArchived_threeLines=#ff${colors[1]}
        chats_pinnedIcon=#ff${colors[1]}
        chats_pinnedOverlay=#31${colors[2]}
        chats_secretIcon=#ff${colors[1]}
        chats_secretName=#ff${colors[1]}
        chats_sentCheck=#ff${colors[1]}
        chats_sentClock=#ff${colors[1]}
        chats_sentError=#ff${colors[1]}
        chats_sentErrorIcon=#ff${colors[0]}
        chats_tabletSelectedOverlay=#ff${colors[1]}
        chats_unreadCounter=#ff${colors[1]}
        chats_unreadCounterMuted=#64${colors[1]}
        chats_unreadCounterText=#ff${colors[0]}
        chats_verifiedBackground=#ff${colors[1]}
        chats_verifiedCheck=#ff${colors[0]}
        checkbox=#ff${colors[1]}
        checkboxCheck=#ff${colors[0]}
        checkboxSquareBackground=#ff${colors[1]}
        checkboxSquareCheck=#ff${colors[0]}
        checkboxSquareDisabled=#ff${colors[2]}
        checkboxSquareUnchecked=#ff${colors[1]}
        contacts_inviteBackground=#ff${colors[0]}
        contacts_inviteText=#ff${colors[1]}
        contextProgressInner1=#ff${colors[2]}
        contextProgressOuter1=#ff${colors[1]}
        dialogBackground=#ff${colors[0]}
        dialogBackgroundGray=#ff${colors[0]}
        dialogBadgeBackground=#ff${colors[1]}
        dialogBadgeText=#ff${colors[0]}
        dialogButton=#ff${colors[1]}
        dialogButtonSelector=#64${colors[1]}
        dialogCheckboxSquareBackground=#ff${colors[1]}
        dialogCheckboxSquareCheck=#ff${colors[0]}
        dialogCheckboxSquareDisabled=#ff${colors[1]}
        dialogCheckboxSquareUnchecked=#ff${colors[1]}
        dialogFloatingButton=#ff${colors[1]}
        dialogFloatingButtonPressed=#ff${colors[0]}
        dialogFloatingIcon=#ff${colors[0]}
        dialogGrayLine=#ff${colors[1]}
        dialogIcon=#ff${colors[1]}
        dialogInputField=#ff${colors[1]}
        dialogInputFieldActivated=#ff${colors[0]}
        dialogLineProgress=#ff${colors[1]}
        dialogLineProgressBackground=#ff${colors[2]}
        dialogLinkSelection=#32${colors[1]}
        dialogProgressCircle=#ff${colors[1]}
        dialogRadioBackground=#ff${colors[0]}
        dialogRadioBackgroundChecked=#ff${colors[1]}
        dialogRoundCheckBox=#ff${colors[1]}
        dialogRoundCheckBoxCheck=#ff${colors[0]}
        dialogScrollGlow=#ff${colors[1]}
        dialogSearchBackground=#64${colors[2]}
        dialogSearchHint=#ff${colors[2]}
        dialogSearchIcon=#ff${colors[2]}
        dialogSearchText=#ff${colors[1]}
        dialogShadowLine=#ff${colors[2]}
        dialogTextBlack=#ff${colors[1]}
        dialogTextBlue2=#ff${colors[1]}
        dialogTextBlue3=#ff${colors[1]}
        dialogTextBlue4=#ff${colors[1]}
        dialogTextBlue=#ff${colors[1]}
        dialogTextGray2=#ff${colors[1]}
        dialogTextGray=#ff${colors[1]}
        dialogTextLink=#ff${colors[1]}
        dialogTextRed=#ff${colors[1]}
        divider=#00${colors[1]}
        emptyListPlaceholder=#ff${colors[2]}
        fastScrollActive=#ff${colors[1]}
        fastScrollInactive=#ff${colors[2]}
        fastScrollText=#ff${colors[0]}
        featuredStickers_addButton=#ff${colors[1]}
        featuredStickers_addButtonPressed=#ff${colors[2]}
        featuredStickers_addedIcon=#ff${colors[1]}
        featuredStickers_buttonText=#ff${colors[0]}
        files_folderIcon=#ff${colors[2]}
        files_folderIconBackground=#ff${colors[0]}
        files_iconText=#ff${colors[0]}
        graySection=#ff${colors[0]}
        groupcreate_checkbox=#ff${colors[1]}
        groupcreate_checkboxCheck=#ff${colors[0]}
        groupcreate_cursor=#ff${colors[1]}
        groupcreate_hintText=#ff${colors[1]}
        groupcreate_offlineText=#ff${colors[1]}
        groupcreate_onlineText=#ff${colors[1]}
        groupcreate_sectionShadow=#ff${colors[0]}
        groupcreate_sectionText=#ff${colors[1]}
        groupcreate_spanBackground=#ff${colors[1]}
        inappPlayerBackground=#ff${colors[0]}
        inappPlayerClose=#ff${colors[1]}
        inappPlayerPerformer=#ff${colors[1]}
        inappPlayerPlayPause=#ff${colors[1]}
        inappPlayerTitle=#ff${colors[1]}
        key_chat_messagePanelVoiceLock=#ff${colors[1]}
        key_chat_messagePanelVoiceLockBackground=#ff${colors[0]}
        key_chat_messagePanelVoiceLockShadow=#ff${colors[0]}
        key_sheet_other=#ff${colors[1]}
        key_sheet_scrollUp=#ff${colors[1]}
        listSelectorSDK21=#ff${colors[1]}
        location_liveLocationProgress=#ff${colors[2]}
        location_placeLocationBackground=#ff${colors[2]}
        location_sendLiveLocationBackground=#ff${colors[2]}
        location_sendLocationBackground=#ff${colors[2]}
        location_sendLocationIcon=#ff${colors[0]}
        musicPicker_buttonBackground=#ff${colors[0]}
        musicPicker_buttonIcon=#ff${colors[2]}
        musicPicker_checkbox=#ff${colors[2]}
        musicPicker_checkboxCheck=#ff${colors[0]}
        picker_badge=#ff${colors[1]}
        picker_badgeText=#ff${colors[0]}
        picker_disabledButton=#ff${colors[2]}
        picker_enabledButton=#ff${colors[1]}
        player_actionBar=#ff${colors[0]}
        player_actionBarItems=#ff${colors[1]}
        player_actionBarSelector=#ff${colors[1]}
        player_actionBarSubtitle=#ff${colors[1]}
        player_actionBarTitle=#ff${colors[1]}
        player_actionBarTop=#ff${colors[0]}
        player_background=#ff${colors[0]}
        player_button=#ff${colors[1]}
        player_buttonActive=#ff${colors[2]}
        player_placeholder=#ff${colors[1]}
        player_placeholderBackground=#ff${colors[0]}
        player_progress=#ff${colors[1]}
        player_progressBackground=#ff${colors[2]}
        player_time=#ff${colors[1]}
        profile_actionBackground=#ff${colors[0]}
        profile_actionIcon=#ff${colors[1]}
        profile_actionPressedBackground=#ff${colors[1]}
        profile_adminIcon=#ff${colors[2]}
        profile_creatorIcon=#ff${colors[1]}
        profile_title=#ff${colors[1]}
        profile_verifiedBackground=#ff${colors[1]}
        profile_verifiedCheck=#ff${colors[0]}
        progressCircle=#ff${colors[1]}
        radioBackground=#ff${colors[1]}
        radioBackgroundChecked=#ff${colors[1]}
        returnToCallBackground=#ff${colors[0]}
        returnToCallText=#ff${colors[1]}
        sessions_devicesImage=#ff${colors[2]}
        sharedMedia_actionMode=#ff${colors[0]}
        sharedMedia_startStopLoadIcon=#ff${colors[1]}
        stickers_menu=#ff${colors[1]}
        stickers_menuSelector=#ff${colors[1]}
        switch2Check=#ff${colors[0]}
        switch2Thumb=#ff${colors[2]}
        switch2ThumbChecked=#ff${colors[2]}
        switch2Track=#4b${colors[2]}
        switch2TrackChecked=#ff${colors[2]}
        switchThumb=#00000000
        switchThumbChecked=#00000000
        switchTrack=#4b${colors[2]}
        switchTrackChecked=#ff${colors[2]}
        undo_background=#ff${colors[1]}
        undo_cancelColor=#ff${colors[0]}
        undo_infoColor=#ff${colors[0]}
        windowBackgroundGray=#ff${colors[0]}
        windowBackgroundGrayShadow=#00000000
        windowBackgroundWhite=#ff${colors[0]}
        windowBackgroundWhiteBlackText=#ff${colors[1]}
        windowBackgroundWhiteBlueHeader=#ff${colors[1]}
        windowBackgroundWhiteBlueText3=#ff${colors[1]}
        windowBackgroundWhiteBlueText6=#ff${colors[2]}
        windowBackgroundWhiteBlueText7=#ff${colors[2]}
        windowBackgroundWhiteBlueText=#ff${colors[1]}
        windowBackgroundWhiteGrayIcon=#ff${colors[1]}
        windowBackgroundWhiteGrayText2=#ff${colors[1]}
        windowBackgroundWhiteGrayText3=#ff${colors[1]}
        windowBackgroundWhiteGrayText4=#ff${colors[1]}
        windowBackgroundWhiteGrayText8=#ff${colors[1]}
        windowBackgroundWhiteGrayText=#ff${colors[1]}
        windowBackgroundWhiteGreenText2=#ff${colors[1]}
        windowBackgroundWhiteLinkSelection=#32${colors[2]}
        windowBackgroundWhiteLinkText=#ff${colors[2]}
        windowBackgroundWhiteRedText2=#ff${colors[1]}
        windowBackgroundWhiteRedText3=#ff${colors[1]}
        windowBackgroundWhiteRedText4=#ff${colors[1]}
        windowBackgroundWhiteRedText5=#ff${colors[1]}
        windowBackgroundWhiteRedText6=#ff${colors[1]}
        windowBackgroundWhiteRedText=#ff${colors[1]}
        windowBackgroundWhiteValueText=#ff${colors[2]}
    `;
};
