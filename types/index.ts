import type { ModelTypes } from 'zeus'
import type { providers } from 'ethers'

// Mirror.xyz types
type EntryType = ModelTypes['entry'];
type CrowdfundType = ModelTypes['crowdfund'];
type EditionType = ModelTypes['edition'];
type ERC20Type = ModelTypes['mirrorERC20Token'];
type PollType = ModelTypes['MirrorPollType'];

type PublisherType = ModelTypes['PublisherType'];
type MediaAssetSizesType = ModelTypes['MediaAssetSizesType'];
type MediaAssetType = ModelTypes['MediaAssetType'];


export type {
    EntryType,
    CrowdfundType,
    EditionType,
    ERC20Type,
    PollType,
    PublisherType,
    MediaAssetSizesType,
    MediaAssetType
}


// user types
type UserType = {
    id?: string,
    address?: string,
    isConnected: boolean,
    network?: providers.Network,
    displayName?: string,
    avatarURL?: string,
    email?: string,
    provider?: providers.Web3Provider | providers.WebSocketProvider,
}

export type {
    UserType,
}