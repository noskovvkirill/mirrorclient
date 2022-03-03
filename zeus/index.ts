/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = GraphQLTypes["PostType"] | GraphQLTypes["CrowdfundListType"]

export type ValueTypes = {
    /** Publication type */
["publication"]: AliasType<{
	id?:boolean,
	ensLabel?:boolean,
	displayName?:boolean,
	avatarURL?:boolean,
	entries?:ValueTypes["entry"],
	crowdfundEntries?:ValueTypes["crowdfund"],
	posts?:ValueTypes["PostType"],
	publicationSettings?:ValueTypes["publicationSettings"],
	contributors?:ValueTypes["contributor"],
	nft?:ValueTypes["nft"],
		__typename?: boolean
}>;
	/** Crowdfund type */
["crowdfund"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	crowdfundDraftId?:boolean,
	name?:boolean,
	symbol?:boolean,
	title?:boolean,
	contributorAddress?:boolean,
	description?:boolean,
	content?:boolean,
	publication?:ValueTypes["publication"],
	operator?:ValueTypes["UserProfileType"],
	address?:boolean,
	fundingRecipient?:boolean,
	goal?:boolean,
	stretchGoal?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	contributionLimit?:boolean,
	endsAt?:boolean,
	version?:boolean,
	editions?:ValueTypes["edition"],
	metadata?:ValueTypes["CrowdfundMetadataType"],
	publishStatus?:boolean,
	createdAt?:boolean,
	blockState?:ValueTypes["BlockStateType"],
	exchangeRate?:boolean,
	token?:ValueTypes["mirrorERC20Token"],
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	["UserProfileType"]: AliasType<{
	address?:boolean,
	displayName?:boolean,
	avatarURL?:boolean,
	contributor?:ValueTypes["contributor"],
	nfts?:ValueTypes["NFTType"],
	editions?:ValueTypes["EditionsType"],
	notificationSettings?:ValueTypes["NotificationSettingsType"],
	theme?:ValueTypes["UserProfileThemeType"],
	ens?:boolean,
	headerImage?:ValueTypes["MediaAssetType"],
	description?:boolean,
	gaTrackingID?:boolean,
	mailingListURL?:boolean,
	domain?:boolean,
	memberships?:ValueTypes["ProjectType"],
	members?:ValueTypes["ProjectType"],
		__typename?: boolean
}>;
	/** Contributor type */
["contributor"]: AliasType<{
	address?:boolean,
	id?:boolean,
	displayName?:boolean,
	avatarURL?:boolean,
	publications?:ValueTypes["publication"],
	signingKeys?:ValueTypes["signingKey"],
		__typename?: boolean
}>;
	/** Returns information about a signing key */
["signingKey"]: AliasType<{
	id?:boolean,
	publicKey?:boolean,
	signature?:ValueTypes["signingKeySignature"],
		__typename?: boolean
}>;
	/** Display the signature proving ownership of a signing key */
["signingKeySignature"]: AliasType<{
	id?:boolean,
	signingKeyId?:boolean,
	signature?:boolean,
	message?:boolean,
		__typename?: boolean
}>;
	["NFTType"]: AliasType<{
	contract?:ValueTypes["NFTContractType"],
	name?:boolean,
	tokenId?:boolean,
	imageURL?:boolean,
	imagePreviewUrl?:boolean,
	imageThumbnailUrl?:boolean,
	imageOriginalUrl?:boolean,
	animationUrl?:boolean,
	animationOriginalUrl?:boolean,
		__typename?: boolean
}>;
	["NFTContractType"]: AliasType<{
	address?:boolean,
	name?:boolean,
	symbol?:boolean,
		__typename?: boolean
}>;
	["EditionsType"]: AliasType<{
	purchased?:ValueTypes["EditionPurchasedType"],
		__typename?: boolean
}>;
	["EditionPurchasedType"]: AliasType<{
	blockNumber?:boolean,
	transactionHash?:boolean,
	logIndex?:boolean,
	event?:boolean,
	editionId?:boolean,
	tokenId?:boolean,
	numSold?:boolean,
	serial?:boolean,
	amountPaid?:boolean,
	buyer?:boolean,
	edition?:ValueTypes["edition"],
		__typename?: boolean
}>;
	/** Edition type */
["edition"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	title?:boolean,
	quantity?:boolean,
	description?:boolean,
	price?:boolean,
	allocation?:boolean,
	editionId?:boolean,
	entryId?:boolean,
	contentHash?:boolean,
	fundingRecipient?:boolean,
	transactionHash?:boolean,
	editionContractAddress?:boolean,
	version?:boolean,
	singleArtifact?:boolean,
	attributes?:ValueTypes["EditionAttribute"],
	crowdfund?:ValueTypes["crowdfund"],
	primaryMedia?:ValueTypes["MediaAssetType"],
	thumbnailMedia?:ValueTypes["MediaAssetType"],
	mediaURL?:boolean,
	artifacts?:ValueTypes["editionArtifact"],
	operator?:ValueTypes["UserProfileType"],
	creator?:ValueTypes["contributor"],
	publication?:ValueTypes["publication"],
	entry?:ValueTypes["entry"],
	events?:ValueTypes["EditionEventsType"],
	tokenIds?:boolean,
	publisher?:ValueTypes["PublisherType"],
	blockState?:ValueTypes["BlockStateType"],
		__typename?: boolean
}>;
	/** Edition Attribute type */
["EditionAttribute"]: AliasType<{
	trait_type?:boolean,
	display_type?:boolean,
	value?:boolean,
		__typename?: boolean
}>;
	/** description */
["MediaAssetType"]: AliasType<{
	id?:boolean,
	mimetype?:boolean,
	sizes?:ValueTypes["MediaAssetSizesType"],
	url?:boolean,
		__typename?: boolean
}>;
	/** description */
["MediaAssetSizesType"]: AliasType<{
	og?:ValueTypes["MediaAssetSizeType"],
	lg?:ValueTypes["MediaAssetSizeType"],
	md?:ValueTypes["MediaAssetSizeType"],
	sm?:ValueTypes["MediaAssetSizeType"],
		__typename?: boolean
}>;
	/** description */
["MediaAssetSizeType"]: AliasType<{
	height?:boolean,
	width?:boolean,
	src?:boolean,
		__typename?: boolean
}>;
	/** Edition Artifact type */
["editionArtifact"]: AliasType<{
	tokenId?:boolean,
	editionId?:boolean,
	url?:boolean,
		__typename?: boolean
}>;
	/** Events for an edition with contract address and ID */
["EditionEventsType"]: AliasType<{
	event?:boolean,
	blockNumber?:boolean,
	logIndex?:boolean,
	transactionHash?:boolean,
	network?:boolean,
	quantity?:boolean,
	price?:boolean,
	fundingRecipient?:boolean,
	editionId?:boolean,
	tokenId?:boolean,
	numSold?:boolean,
	buyer?:boolean,
	feePercent?:boolean,
	sender?:boolean,
	newFee?:boolean,
	feesAccrued?:boolean,
	previousOwner?:boolean,
	newOwner?:boolean,
	amountWithdrawn?:boolean,
	feeAmount?:boolean,
	amountPaid?:boolean,
	contentHash?:boolean,
	receiver?:boolean,
	previousCreator?:boolean,
	newCreator?:boolean,
	from?:boolean,
	to?:boolean,
	owner?:boolean,
	approved?:boolean,
	operator?:boolean,
	avatarURL?:boolean,
	twitterUsername?:boolean,
	collectorAddress?:boolean,
	serialNumber?:boolean,
		__typename?: boolean
}>;
	/** The publisher of the block */
["PublisherType"]: AliasType<{
	/** The project that published the block */
	project?:ValueTypes["ProjectType"],
	/** The member that published on behalf of the project */
	member?:ValueTypes["ProjectType"],
		__typename?: boolean
}>;
	["ProjectType"]: AliasType<{
	_id?:boolean,
	address?:boolean,
	displayName?:boolean,
	avatarURL?:boolean,
	notificationSettings?:ValueTypes["NotificationSettingsType"],
	theme?:ValueTypes["UserProfileThemeType"],
	ens?:boolean,
	headerImage?:ValueTypes["MediaAssetType"],
	description?:boolean,
	gaTrackingID?:boolean,
	mailingListURL?:boolean,
	domain?:boolean,
	memberships?:ValueTypes["ProjectType"],
	members?:ValueTypes["ProjectType"],
	pendingMemberships?:ValueTypes["ProjectType"],
	pendingMembers?:ValueTypes["ProjectType"],
	posts?:ValueTypes["PostType"],
	featureFlags?:ValueTypes["FeatureFlagStatusType"],
	navigation?:ValueTypes["NavigationType"],
		__typename?: boolean
}>;
	["NotificationSettingsType"]: AliasType<{
	writeRace?:boolean,
		__typename?: boolean
}>;
	/** User Profile Theme */
["UserProfileThemeType"]: AliasType<{
	colorMode?:boolean,
	accent?:boolean,
		__typename?: boolean
}>;
	["ColorModeType"]:ColorModeType;
	["AccentType"]:AccentType;
	["PostType"]: AliasType<{		["...on entry"] : ValueTypes["entry"],
		["...on crowdfund"] : ValueTypes["crowdfund"]
		__typename?: boolean
}>;
	["FeatureFlagStatusType"]: AliasType<{
	isPluginsTabEnabled?:boolean,
		__typename?: boolean
}>;
	["NavigationType"]: AliasType<{
	section?:ValueTypes["NavigationSectionType"],
	content?:ValueTypes["NavigationContentType"],
		__typename?: boolean
}>;
	["NavigationSectionType"]: AliasType<{
	isFundingEnabled?:boolean,
	isNFTsEnabled?:boolean,
	isGovernanceEnabled?:boolean,
		__typename?: boolean
}>;
	["NavigationContentType"]: AliasType<{
	isCrowdfundsEnabled?:boolean,
	isSplitsEnabled?:boolean,
	isTokensEnabled?:boolean,
	isEditionsEnabled?:boolean,
	isTokenRaceEnabled?:boolean,
	isAuctionsEnabled?:boolean,
		__typename?: boolean
}>;
	/** Provides information about the state of the block */
["BlockStateType"]: AliasType<{
	/** Status of the block */
	status?:boolean,
		__typename?: boolean
}>;
	["BlockStatusEnum"]:BlockStatusEnum;
	/** CrowdfundMetadata Type */
["CrowdfundMetadataType"]: AliasType<{
	coverImage?:ValueTypes["MediaAssetType"],
	podium?:ValueTypes["PodiumType"],
		__typename?: boolean
}>;
	/** Podium Type */
["PodiumType"]: AliasType<{
	first?:ValueTypes["PodiumFieldType"],
	second?:ValueTypes["PodiumFieldType"],
	third?:ValueTypes["PodiumFieldType"],
	duration?:boolean,
		__typename?: boolean
}>;
	/** PodiumField Type */
["PodiumFieldType"]: AliasType<{
	title?:boolean,
	description?:boolean,
	primaryMedia?:ValueTypes["MediaAssetType"],
	thumbnailMedia?:ValueTypes["MediaAssetType"],
		__typename?: boolean
}>;
	/** MirrorERC20Token type */
["mirrorERC20Token"]: AliasType<{
	id?:boolean,
	name?:boolean,
	symbol?:boolean,
	numDecimals?:boolean,
	totalSupply?:boolean,
	totalSupplyFormatted?:boolean,
	operator?:ValueTypes["UserProfileType"],
	description?:boolean,
	publication?:ValueTypes["publication"],
	tokenAddress?:boolean,
	iconMedia?:ValueTypes["MediaAssetType"],
	network?:boolean,
	transactionHash?:boolean,
	contributionLimit?:boolean,
	ownerAddress?:boolean,
	version?:boolean,
	createdAt?:boolean,
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** Publication Settings type */
["publicationSettings"]: AliasType<{
	publicationLabel?:boolean,
	settings?:boolean,
	digest?:boolean,
	contributorAddress?:boolean,
	key?:boolean,
	signature?:boolean,
	timestamp?:boolean,
		__typename?: boolean
}>;
	/** NFT type */
["nft"]: AliasType<{
	id?:boolean,
	name?:boolean,
	tokenURI?:boolean,
	contributorAddress?:boolean,
	address?:boolean,
	contentHash?:boolean,
	network?:boolean,
	tokenId?:boolean,
	transactionHash?:boolean,
	entryDigest?:boolean,
		__typename?: boolean
}>;
	/** Entry type */
["entry"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	entryId?:boolean,
	digest?:boolean,
	originalDigest?:boolean,
	title?:boolean,
	hideTitleInEntry?:boolean,
	body?:boolean,
	timestamp?:boolean,
	publishedAtTimestamp?:boolean,
	publishStatus?:boolean,
	canonicalUrl?:boolean,
	publicationId?:boolean,
	userProfileId?:boolean,
	featuredImageId?:boolean,
	arweaveTransactionRequest?:ValueTypes["ArweaveTransactionRequestType"],
	/** Transaction hash that includes NFT event */
	nftTransactionHash?:boolean,
	/** address of the token that has the NFT */
	nftAddress?:boolean,
	/** Optional token id of the NFT */
	nftTokenId?:boolean,
	publication?:ValueTypes["publication"],
	userProfile?:ValueTypes["UserProfileType"],
	contributor?:ValueTypes["contributor"],
	author?:ValueTypes["UserProfileType"],
	nft?:ValueTypes["nft"],
	authorship?:ValueTypes["Authorship"],
	contributors?:ValueTypes["contributor"],
	editions?:ValueTypes["edition"],
	featuredImage?:ValueTypes["MediaAssetType"],
	publisher?:ValueTypes["PublisherType"],
	collaborators?:ValueTypes["ProjectType"],
		__typename?: boolean
}>;
	/** Describes an Arweave Transaction Request */
["ArweaveTransactionRequestType"]: AliasType<{
	id?:boolean,
	transactionId?:boolean,
	entryId?:boolean,
		__typename?: boolean
}>;
	/** Contains verification of authorship */
["Authorship"]: AliasType<{
	publicKey?:boolean,
	signature?:boolean,
		__typename?: boolean
}>;
	/** API Queries [Read] */
["query"]: AliasType<{
publication?: [{	ensLabel?:string | null,	publicOnly?:boolean | null},ValueTypes["publication"]],
publicationFeed?: [{	ensLabel?:string | null,	publicOnly?:boolean | null},ValueTypes["publication"]],
publicationContributors?: [{	ensLabel?:string | null},ValueTypes["contributor"]],
	publications?:ValueTypes["publication"],
contributor?: [{	address?:string | null},ValueTypes["contributor"]],
contributorsByAddress?: [{	addresses?:(string | undefined | null)[]},ValueTypes["contributor"]],
	nextContributorId?:boolean,
entry?: [{	digest?:string | null},ValueTypes["entry"]],
entries?: [{	publicOnly?:boolean | null,	projectAddress?:string | null},ValueTypes["entry"]],
resolveENS?: [{	/** The full name of the ENS domain, e.g. test.mirror.xyz */
	name?:string | null},ValueTypes["ENS"]],
lookupENS?: [{	/** The address to look up */
	address?:string | null},ValueTypes["ENS"]],
addressInfo?: [{	address?:string | null},ValueTypes["addressInfo"]],
publicationSettings?: [{	publicationLabel?:string | null},ValueTypes["publicationSettings"]],
	verifiedAccounts?:ValueTypes["VerifiedAccount"],
verifiedAccount?: [{	address?:string | null},ValueTypes["VerifiedAccount"]],
isVerified?: [{	address?:string | null},boolean],
verifiedAccountsAfterTimestamp?: [{	/** Timestamp in MS */
	timestamp?:string | null},ValueTypes["VerifiedAccount"]],
registrationEvent?: [{	ensLabel?:string | null},ValueTypes["registrationEvent"]],
	registrationEvents?:ValueTypes["registrationEvent"],
	registeredProfiles?:ValueTypes["RegisteredProfile"],
	verifiedVotes?:ValueTypes["VerifiedVoteType"],
votingPower?: [{	account?:string | null},ValueTypes["VotingPowerType"]],
verifiedVotesByRound?: [{	round?:string | null,	limit?:number | null,	offset?:number | null},ValueTypes["VerifiedVoteType"]],
crowdfunds?: [{	projectAddress?:string | null},ValueTypes["CrowdfundListType"]],
droppedCrowdfunds?: [{	userAddress?:string | null},ValueTypes["crowdfund"]],
crowdfundAtAddress?: [{	address?:string | null},ValueTypes["crowdfund"]],
crowdfundBlockData?: [{	address?:string | null},ValueTypes["CrowdfundBlock"]],
crowdfundEntries?: [{	userAddress?:string | null,	ensLabel?:string | null},ValueTypes["crowdfund"]],
nfts?: [{	contributorAddress?:string | null},ValueTypes["nft"]],
nft?: [{	address?:string | null,	tokenId?:number | null},ValueTypes["nft"]],
reserveAuctions?: [{	/** Project address */
	projectAddress?:string | null},ValueTypes["reserveAuction"]],
reserveAuction?: [{	nftAddress?:string | null,	tokenId?:number | null,	auctionId?:string | null},ValueTypes["reserveAuction"]],
	socialProfiles?:ValueTypes["SocialProfileType"],
socialProfile?: [{	/** Wallet address of the user */
	address?:string | null},ValueTypes["SocialProfileType"]],
	writeRaceProfiles?:ValueTypes["WriteRaceProfileType"],
	leaderboard?:ValueTypes["LeaderboardType"],
twitterProfile?: [{	username?:string | null},ValueTypes["TwitterProfileType"]],
twitterProfilesById?: [{	ids?:(number | undefined | null)[]},ValueTypes["TwitterProfileType"]],
splits?: [{	/** Project address */
	projectAddress?:string | null},ValueTypes["SplitType"]],
split?: [{	address?:string | null},ValueTypes["SplitType"]],
	unverifiedTwitterProfiles?:ValueTypes["UnverifiedTwitterProfileType"],
editions?: [{	/** Address of project */
	projectAddress?:string | null},ValueTypes["edition"]],
edition?: [{	editionId?:number | null,	editionContractAddress?:string | null},ValueTypes["edition"]],
userActivityFeed?: [{	address?:string | null},ValueTypes["ActivityPropertiesType"]],
email?: [{	address?:string | null},ValueTypes["email"]],
crowdfundEvents?: [{	address?:string | null},ValueTypes["crowdfundEvents"]],
userProfile?: [{	address?:string | null},ValueTypes["UserProfileType"]],
me?: [{	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	userAddress?:string | null,	projectAddress?:string | null},ValueTypes["ProjectType"]],
verifyPublicKey?: [{	/** User Mirror Public Key */
	publicKey?:string | null},ValueTypes["PublicKeyVerification"]],
address?: [{	/** User Mirror Public Key */
	publicKey?:string | null},boolean],
mirrorProject?: [{	/** Address/ENS/domain of Mirror project */
	address?:string | null},ValueTypes["MirrorProjectType"]],
	projectThemeOptions?:ValueTypes["ProjectThemeOptionsType"],
hasUserSubmittedSurvey?: [{	address?:string | null,	surveyId?:number | null},boolean],
getSurvey?: [{	/** ID of the survey */
	surveyId?:number | null,	/** Address of the crowdfund */
	crowdfundAddress?:string | null},ValueTypes["SurveyType"]],
crowdfundDraftById?: [{	/** Crowdfund draft ID */
	id?:number | null,	/** Signature */
	signature?:string | null,	/** Digest */
	digest?:string | null,	/** Unix Timestamp */
	timestamp?:string | null,	/** Address of user who created crowdfund draft */
	address?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null},ValueTypes["CrowdfundDraft"]],
	/** Endpoint for querying all contracts */
	contracts?:ValueTypes["Contract"],
proposals?: [{	address?:string | null},ValueTypes["Proposal"]],
proposal?: [{	cid?:string | null},ValueTypes["Proposal"]],
proposalVotingPower?: [{	cid?:string | null,	address?:string | null},ValueTypes["ProposalUserVotingPower"]],
proposalEntryVotes?: [{	proposalCid?:string | null,	proposalEntryCid?:string | null},ValueTypes["ProposalEntryVote"]],
writeRaceSearch?: [{	usernameOrAccount?:string | null,	roundNumber?:number | null},ValueTypes["WriteRaceRoundDataType"]],
writeRaceVotingPower?: [{	address?:string | null,	roundNumber?:number | null},ValueTypes["WriteRaceVotingPowerType"]],
writeRaceCurrentUser?: [{	account?:string | null,	roundNumber?:number | null},ValueTypes["WriteRaceCurrentUser"]],
writeRaceCurrentRound?: [{	limit?:number | null,	offset?:number | null},ValueTypes["WriteRaceCurrentRound"]],
writeRaceLeaderboard?: [{	round?:number | null},ValueTypes["WriteRaceLeaderboardType"]],
	writeRaceGenesisWriters?:ValueTypes["WriteRaceLeaderboardWinnerType"],
mirrorPoll?: [{	/** Database ID of poll */
	id?:number | null},ValueTypes["MirrorPollType"]],
mirrorPollCanRespond?: [{	/** Database ID of poll */
	pollId?:number | null,	/** User address */
	address?:string | null},boolean],
mirrorPollUser?: [{	/** Database ID of poll */
	pollId?:number | null,	/** User address */
	address?:string | null},ValueTypes["MirrorPollUser"]],
dutchAuction?: [{	/** Address of the proxy contract */
	address?:string | null},ValueTypes["DutchAuctionType"]],
editionOpenSale?: [{	/** Database ID of sale */
	id?:number | null},ValueTypes["editionOpenSale"]],
mirrorERC20Tokens?: [{	projectAddress?:string | null},ValueTypes["mirrorERC20Token"]],
mirrorERC20TokenAtAddress?: [{	tokenAddress?:string | null},ValueTypes["mirrorERC20Token"]],
crowdfundTokenApprovalMetadata?: [{	crowdfundAddress?:string | null,	projectAddress?:string | null},ValueTypes["crowdfundTokenApprovalMetadata"]],
projectFeed?: [{	projectAddress?:string | null},ValueTypes["ProjectType"]],
plugins?: [{	projectAddress?:string | null},ValueTypes["PluginType"]],
	/** List of all available plugins */
	pluginsList?:ValueTypes["PluginType"],
		__typename?: boolean
}>;
	/** ENS type */
["ENS"]: AliasType<{
	name?:boolean,
	address?:boolean,
		__typename?: boolean
}>;
	/** Provides some basic information about an Etheruem address */
["addressInfo"]: AliasType<{
	ens?:boolean,
	writeTokens?:boolean,
	hasOnboarded?:boolean,
		__typename?: boolean
}>;
	["VerifiedAccount"]: AliasType<{
	twitterProfileId?:boolean,
	account?:boolean,
	username?:boolean,
	signature?:boolean,
	name?:boolean,
	twitterId?:boolean,
	avatarURL?:boolean,
	followerCount?:boolean,
	promptResponse?:ValueTypes["promptResponse"],
		__typename?: boolean
}>;
	/** PromptResponse type */
["promptResponse"]: AliasType<{
	id?:boolean,
	content?:boolean,
	createdAt?:boolean,
		__typename?: boolean
}>;
	/** RegistrationEvent type */
["registrationEvent"]: AliasType<{
	id?:boolean,
	account?:boolean,
	ensLabel?:boolean,
	transactionHash?:boolean,
		__typename?: boolean
}>;
	["RegisteredProfile"]: AliasType<{
	id?:boolean,
	account?:boolean,
	username?:boolean,
	avatarURL?:boolean,
		__typename?: boolean
}>;
	["VerifiedVoteType"]: AliasType<{
	account?:boolean,
	candidate?:boolean,
	round?:boolean,
	signature?:boolean,
	amount?:boolean,
	createdAt?:boolean,
		__typename?: boolean
}>;
	["VotingPowerType"]: AliasType<{
	account?:boolean,
	votingPower?:boolean,
	round?:boolean,
	reasons?:boolean,
		__typename?: boolean
}>;
	["CrowdfundListType"]: AliasType<{		["...on CrowdfundDraft"] : ValueTypes["CrowdfundDraft"],
		["...on crowdfund"] : ValueTypes["crowdfund"]
		__typename?: boolean
}>;
	/** CrowdfundDraft type */
["CrowdfundDraft"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	data?:boolean,
	name?:boolean,
	symbol?:boolean,
	title?:boolean,
	crowdfundDraftId?:boolean,
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** CrowdfundBlock type */
["CrowdfundBlock"]: AliasType<{
	name?:boolean,
	symbol?:boolean,
	contractAddress?:boolean,
	valueCurrent?:boolean,
	stretchGoal?:boolean,
	fundingCap?:boolean,
	tokensIssued?:boolean,
	isRedeemable?:boolean,
	isActive?:boolean,
	operatorEquityPercent?:boolean,
	contributionLimit?:boolean,
	fundingRecipientAddress?:boolean,
	operator?:ValueTypes["UserProfileType"],
	backers?:ValueTypes["CrowdfundBacker"],
	events?:ValueTypes["CrowdfundEvent"],
	podiumDuration?:boolean,
	podiumStartTime?:boolean,
	minPodiumBid?:boolean,
	accountBalance?:boolean,
	totalSupply?:boolean,
	status?:boolean,
		__typename?: boolean
}>;
	/** CrowdfundBacker Type */
["CrowdfundBacker"]: AliasType<{
	eth?:boolean,
	tokens?:boolean,
	address?:boolean,
	blockNumber?:boolean,
	avatarURL?:boolean,
	twitterUsername?:boolean,
	percentage?:boolean,
		__typename?: boolean
}>;
	/** CrowdfundEvent Type */
["CrowdfundEvent"]: AliasType<{
	id?:boolean,
	event?:boolean,
	amount?:boolean,
	amountRaised?:boolean,
	amountFormatted?:boolean,
	amountRaisedFormatted?:boolean,
	creatorAllocation?:boolean,
	value?:boolean,
	address?:boolean,
	from?:boolean,
	to?:boolean,
	blockNumber?:boolean,
	logIndex?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	editionId?:boolean,
	tokenId?:boolean,
	crowdfundId?:boolean,
	timestamp?:boolean,
		__typename?: boolean
}>;
	/** ReserveAuction type */
["reserveAuction"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	tokenId?:boolean,
	duration?:boolean,
	address?:boolean,
	nftAddress?:boolean,
	auctionId?:boolean,
	creatorShareRecipientAddress?:boolean,
	creatorAddress?:boolean,
	fundsRecipientAddress?:boolean,
	deployerAddress?:boolean,
	curatorAddress?:boolean,
	curatorFee?:boolean,
	version?:boolean,
	reservePrice?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	createdAt?:boolean,
	events?:ValueTypes["ReserveAuctionEvent"],
	operator?:ValueTypes["UserProfileType"],
	deployer?:ValueTypes["contributor"],
	publication?:ValueTypes["publication"],
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** ReserveAuctionEvent type */
["ReserveAuctionEvent"]: AliasType<{
	event?:boolean,
	blockNumber?:boolean,
	logIndex?:boolean,
	transactionHash?:boolean,
	network?:boolean,
	nftContractAddress?:boolean,
	tokenId?:boolean,
	curator?:boolean,
	amount?:boolean,
	winner?:boolean,
	nftCreator?:boolean,
	fundsRecipient?:boolean,
	value?:boolean,
	sender?:boolean,
	duration?:boolean,
	reservePrice?:boolean,
	curatorFeePercent?:boolean,
	creator?:boolean,
	originalCreator?:boolean,
	zoraAddress?:boolean,
	creatorShareRecipient?:boolean,
	firstBid?:boolean,
	extended?:boolean,
	timestamp?:boolean,
	auctionId?:boolean,
		__typename?: boolean
}>;
	["SocialProfileType"]: AliasType<{
	address?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
	mirror?:ValueTypes["MirrorProfileType"],
		__typename?: boolean
}>;
	["TwitterProfileType"]: AliasType<{
	id?:boolean,
	username?:boolean,
	avatarURL?:boolean,
	twitterId?:boolean,
	followerCount?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["MirrorProfileType"]: AliasType<{
	contributor?:ValueTypes["contributor"],
		__typename?: boolean
}>;
	["WriteRaceProfileType"]: AliasType<{
	address?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
	mirror?:ValueTypes["MirrorProfileType"],
	promptResponse?:ValueTypes["promptResponse"],
		__typename?: boolean
}>;
	["LeaderboardType"]: AliasType<{
	title?:boolean,
	numVotes?:boolean,
	candidates?:boolean,
	profiles?:ValueTypes["LeaderboardProfileType"],
		__typename?: boolean
}>;
	["LeaderboardProfileType"]: AliasType<{
	numVotes?:boolean,
	votingPower?:boolean,
	account?:boolean,
	username?:boolean,
	avatarURL?:boolean,
	followerCount?:boolean,
	backers?:ValueTypes["LeaderboardBackerType"],
	ensDomain?:boolean,
	notHighlighted?:boolean,
		__typename?: boolean
}>;
	["LeaderboardBackerType"]: AliasType<{
	amount?:boolean,
	account?:boolean,
	username?:boolean,
	avatarURL?:boolean,
	followerCount?:boolean,
		__typename?: boolean
}>;
	/** Returns information about a split */
["SplitType"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	name?:boolean,
	address?:boolean,
	transactionHash?:boolean,
	network?:boolean,
	splitAllocations?:ValueTypes["SplitAllocationType"],
	events?:ValueTypes["SplitEventType"],
	operator?:ValueTypes["UserProfileType"],
	publication?:ValueTypes["publication"],
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** Returns information about a split allocation */
["SplitAllocationType"]: AliasType<{
	id?:boolean,
	address?:boolean,
	scaledPercent?:boolean,
	splitAmount?:boolean,
	account?:boolean,
	userProfile?:ValueTypes["UserProfileType"],
		__typename?: boolean
}>;
	/** Events for a split */
["SplitEventType"]: AliasType<{
	event?:boolean,
	account?:boolean,
	amount?:boolean,
	amountFormatted?:boolean,
	asset?:boolean,
	blockNumber?:boolean,
	category?:boolean,
	currentWindow?:boolean,
	from?:boolean,
	fundsAvailable?:boolean,
	fundsAvailableFormatted?:boolean,
	logIndex?:boolean,
	network?:boolean,
	success?:boolean,
	to?:boolean,
	transactionHash?:boolean,
		__typename?: boolean
}>;
	["UnverifiedTwitterProfileType"]: AliasType<{
	id?:boolean,
	address?:boolean,
	twitterProfile?:ValueTypes["TwitterProfileType"],
		__typename?: boolean
}>;
	["ActivityPropertiesType"]: AliasType<{
	key?:boolean,
	detailValue?:boolean,
		__typename?: boolean
}>;
	/** Email type */
["email"]: AliasType<{
	verificationStatus?:boolean,
		__typename?: boolean
}>;
	["VerificationStatusEnum"]:VerificationStatusEnum;
	/** Crowdfund Events type */
["crowdfundEvents"]: AliasType<{
	event?:boolean,
	amount?:boolean,
	amountRaised?:boolean,
	amountFormatted?:boolean,
	amountRaisedFormatted?:boolean,
	creatorAllocation?:boolean,
	value?:boolean,
	address?:boolean,
	from?:boolean,
	to?:boolean,
	blockNumber?:boolean,
	logIndex?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	tokenId?:boolean,
	editionId?:boolean,
		__typename?: boolean
}>;
	["PublicKeyVerification"]: AliasType<{
	address?:boolean,
		__typename?: boolean
}>;
	["MirrorProjectType"]: AliasType<{
	isRegistered?:boolean,
	projectDetails?:ValueTypes["ProjectType"],
		__typename?: boolean
}>;
	/** Project Theme */
["ProjectThemeOptionsType"]: AliasType<{
	colorModes?:boolean,
	accents?:boolean,
		__typename?: boolean
}>;
	/** Type for a survey */
["SurveyType"]: AliasType<{
	prompt?:boolean,
	backers?:boolean,
	title?:boolean,
	description?:boolean,
		__typename?: boolean
}>;
	/** Contract type */
["Contract"]: AliasType<{
	name?:boolean,
	abi?:boolean,
	address?:boolean,
	version?:boolean,
		__typename?: boolean
}>;
	/** Proposal Type */
["Proposal"]: AliasType<{
	_id?:boolean,
	cid?:boolean,
	erc20Address?:boolean,
	erc721Address?:boolean,
	startDate?:boolean,
	endDate?:boolean,
	tokenName?:boolean,
	tokenSymbol?:boolean,
	title?:boolean,
	description?:boolean,
	prompt?:boolean,
	tokenThreshold?:boolean,
	tokenIds?:boolean,
	highlightedWinners?:boolean,
	coverImage?:ValueTypes["MediaAssetType"],
	status?:boolean,
	snapshot?:ValueTypes["ProposalSnapshot"],
	results?:ValueTypes["ProposalResult"],
	resultsCid?:boolean,
	entries?:ValueTypes["ProposalEntry"],
	operator?:ValueTypes["UserProfileType"],
	publication?:ValueTypes["publication"],
	erc721Multiplier?:boolean,
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** Proposal Snapshot Type */
["ProposalSnapshot"]: AliasType<{
	cid?:boolean,
	blockNumber?:boolean,
		__typename?: boolean
}>;
	/** Proposal Type */
["ProposalResult"]: AliasType<{
	votes?:boolean,
	proposalEntryCid?:boolean,
	proposalCid?:boolean,
	body?:boolean,
	entryAuthorAddress?:boolean,
	isHighlighted?:boolean,
	position?:boolean,
		__typename?: boolean
}>;
	/** Proposal Entry Type */
["ProposalEntry"]: AliasType<{
	address?:boolean,
	body?:boolean,
	cid?:boolean,
	proposalCid?:boolean,
	votes?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
		__typename?: boolean
}>;
	/** proposal voting power (user) */
["ProposalUserVotingPower"]: AliasType<{
	totalVotes?:boolean,
	availableVotes?:boolean,
	multisigs?:ValueTypes["ProposalVotingPowerMultisig"],
		__typename?: boolean
}>;
	/** proposal voting power (multisig) */
["ProposalVotingPowerMultisig"]: AliasType<{
	totalVotes?:boolean,
	availableVotes?:boolean,
	address?:boolean,
		__typename?: boolean
}>;
	/** Proposal entry vote data */
["ProposalEntryVote"]: AliasType<{
	votes?:boolean,
	address?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
		__typename?: boolean
}>;
	/** Write race round responses data */
["WriteRaceRoundDataType"]: AliasType<{
	address?:boolean,
	votes?:boolean,
	voters?:ValueTypes["WriteRaceVoterDataType"],
	twitter?:ValueTypes["TwitterProfileType"],
	response?:boolean,
	score?:boolean,
		__typename?: boolean
}>;
	/** Write race voter data for prompt response */
["WriteRaceVoterDataType"]: AliasType<{
	address?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
	votes?:boolean,
		__typename?: boolean
}>;
	/** Voting Power */
["WriteRaceVotingPowerType"]: AliasType<{
	totalVotes?:boolean,
	availableVotes?:boolean,
		__typename?: boolean
}>;
	/** Current User Details */
["WriteRaceCurrentUser"]: AliasType<{
	address?:boolean,
	votes?:boolean,
	voters?:ValueTypes["WriteRaceVoterDataType"],
	twitter?:ValueTypes["TwitterProfileType"],
	response?:boolean,
	isRegistered?:boolean,
	isWinner?:boolean,
	rank?:boolean,
		__typename?: boolean
}>;
	/** Current round details */
["WriteRaceCurrentRound"]: AliasType<{
	round?:boolean,
	status?:boolean,
	startsAt?:boolean,
	endsAt?:boolean,
	roundDetails?:ValueTypes["WriteRaceRoundType"],
	isQuadratic?:boolean,
	isPaused?:boolean,
		__typename?: boolean
}>;
	/** Write race round data */
["WriteRaceRoundType"]: AliasType<{
	roundData?:ValueTypes["WriteRaceRoundDataType"],
	votesCast?:boolean,
	candidates?:boolean,
	currentPrompt?:boolean,
	roundNumber?:boolean,
	voters?:boolean,
		__typename?: boolean
}>;
	["WriteRaceLeaderboardType"]: AliasType<{
	isQuadratic?:boolean,
	votes?:boolean,
	candidates?:boolean,
	winners?:ValueTypes["WriteRaceLeaderboardWinnerType"],
	voters?:boolean,
		__typename?: boolean
}>;
	/** Write Race Winner */
["WriteRaceLeaderboardWinnerType"]: AliasType<{
	voters?:ValueTypes["WriteRaceVoterDataType"],
	address?:boolean,
	votes?:boolean,
	score?:boolean,
	votingPower?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
	ensLabel?:boolean,
		__typename?: boolean
}>;
	/** mirror poll */
["MirrorPollType"]: AliasType<{
	_id?:boolean,
	id?:boolean,
	title?:boolean,
	description?:boolean,
	prompt?:boolean,
	status?:boolean,
	endsAt?:boolean,
	startsAt?:boolean,
	coverImage?:ValueTypes["MediaAssetType"],
	choices?:ValueTypes["MirrorPollChoice"],
		__typename?: boolean
}>;
	["MirrorPollStatusEnum"]:MirrorPollStatusEnum;
	/** Mirror poll choice */
["MirrorPollChoice"]: AliasType<{
	id?:boolean,
	title?:boolean,
	description?:boolean,
	responses?:ValueTypes["MirrorPollResponse"],
		__typename?: boolean
}>;
	/** Mirror poll response */
["MirrorPollResponse"]: AliasType<{
	address?:boolean,
	twitter?:ValueTypes["TwitterProfileType"],
		__typename?: boolean
}>;
	/** User data for a mirror poll */
["MirrorPollUser"]: AliasType<{
	hasPermission?:boolean,
	existingVote?:boolean,
		__typename?: boolean
}>;
	/** Dutch Auction */
["DutchAuctionType"]: AliasType<{
	_id?:boolean,
	events?:ValueTypes["DutchAuctionEventType"],
	status?:boolean,
	operator?:ValueTypes["UserProfileType"],
	publication?:ValueTypes["publication"],
	address?:boolean,
	transactionHash?:boolean,
	version?:boolean,
	fundsRecipientAddress?:boolean,
	name?:boolean,
	subheading?:boolean,
	description?:boolean,
	tokenIds?:boolean,
	prices?:boolean,
	totalSupply?:boolean,
	collected?:boolean,
	currentPrice?:boolean,
	timeRemaining?:boolean,
	nextBlock?:boolean,
	edition?:ValueTypes["edition"],
	isPaused?:boolean,
	collectors?:ValueTypes["CollectorType"],
	totalRaised?:boolean,
	hasStarted?:boolean,
	network?:boolean,
	publisher?:ValueTypes["PublisherType"],
		__typename?: boolean
}>;
	/** Dutch Auction Event */
["DutchAuctionEventType"]: AliasType<{
	blockNumber?:boolean,
	logIndex?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	event?:boolean,
	tokenId?:boolean,
	recipient?:boolean,
	amount?:boolean,
	fee?:boolean,
	price?:boolean,
	account?:boolean,
	priceFormatted?:boolean,
	amountFormatted?:boolean,
	feeFormatted?:boolean,
		__typename?: boolean
}>;
	["DutchAuctionStatusType"]:DutchAuctionStatusType;
	/** Dutch Auction Collectors */
["CollectorType"]: AliasType<{
	address?:boolean,
	user?:ValueTypes["UserProfileType"],
	price?:boolean,
		__typename?: boolean
}>;
	/** EditionOpenSale type */
["editionOpenSale"]: AliasType<{
	id?:boolean,
	token?:boolean,
	operator?:boolean,
	recipient?:boolean,
	symbol?:boolean,
	startTokenId?:boolean,
	endTokenId?:boolean,
	price?:boolean,
	userProfile?:ValueTypes["UserProfileType"],
	publication?:ValueTypes["publication"],
	contract?:ValueTypes["Contract"],
	h?:boolean,
	network?:boolean,
	transactionHash?:boolean,
	contributionLimit?:boolean,
	version?:boolean,
	createdAt?:boolean,
	open?:boolean,
	status?:boolean,
	publisher?:ValueTypes["PublisherType"],
	purchases?:ValueTypes["editionOpenSalePurchase"],
		__typename?: boolean
}>;
	/** EditionOpenSalePurchase Type */
["editionOpenSalePurchase"]: AliasType<{
	tokenId?:boolean,
	buyer?:boolean,
	recipient?:boolean,
	twitterUsername?:boolean,
	avatarURL?:boolean,
	transactionHash?:boolean,
		__typename?: boolean
}>;
	/** CrowdfundTokenApprovalMetadata type */
["crowdfundTokenApprovalMetadata"]: AliasType<{
	id?:boolean,
	status?:boolean,
	tokenAddress?:boolean,
	crowdfundAddress?:boolean,
	numberOfTokensToApprove?:boolean,
	tokenOwnerAddress?:boolean,
	transactionHash?:boolean,
		__typename?: boolean
}>;
	["PluginType"]: AliasType<{
	_id?:boolean,
	key?:boolean,
	name?:boolean,
	description?:boolean,
	category?:boolean,
	imageURL?:boolean,
	installed?:boolean,
		__typename?: boolean
}>;
	/** API Mutations [Create, Update, Delete] */
["mutations"]: AliasType<{
registerContributor?: [{	/** The Ethereum address associated with the contributor */
	contributorEthAddress?:string | null,	/** The name of the publication */
	publicationDisplayName?:string | null,	/** The label of the ENS domain */
	publicationENSLabel?:string | null,	/** The URL of the publication's Avatar */
	publicationAvatarURL?:string | null,	/** The contributor's display name */
	contributorDisplayName?:string | null,	/** The URL of the contributor's avatar */
	contributorAvatarURL?:string | null,	/** The public key for the EC keypair used for signing from a device */
	signingKey?:string | null,	/** The signature proving ownership of the signing key */
	ethSignature?:string | null},ValueTypes["contributor"]],
registerContributorForPublication?: [{	/** The Ethereum address associated with the contributor */
	address?:string | null,	/** The label of the ENS domain */
	ensLabel?:string | null,	/** The contributor's display name */
	displayName?:string | null,	/** The URL of the contributor's avatar */
	avatarURL?:string | null,	/** The public key for the EC keypair used for signing from a device */
	signingKey?:string | null,	/** The signature proving ownership of the signing key */
	ethSignature?:string | null},ValueTypes["contributor"]],
updateContributorSettings?: [{	contributorAddress?:string | null,	settings?:string | null,	digest?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:number | null},ValueTypes["contributor"]],
removeContributor?: [{	contributorAddress?:string | null,	ensLabel?:string | null,	contractAddress?:string | null,	transactionHash?:string | null,	network?:string | null},ValueTypes["success"]],
changeEntryStatus?: [{	/** The digest of the original entry's content */
	originalDigest?:string | null,	/** The status of the entry: `public` or `hidden` */
	status?:string | null,	/** The digest for the JSON object including originalDigest and status */
	digest?:string | null,	/** The signature from the contributor's signing key */
	signature?:string | null,	/** The Ethereum address of the contributor */
	userAddress?:string | null,	/** The public key that signed the content */
	key?:string | null,	/** The UNIX timestamp in seconds to be displayed as publication date for the entry */
	timestamp?:number | null},boolean],
createEntry?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** The entry's title */
	title?:string | null,	/** The entry's main content */
	body?:string | null,	/** The digest of the content's data */
	digest?:string | null,	/** The signature from the contributor's signing key */
	signature?:string | null,	/** The public key that signed the content */
	key?:string | null,	/** The UNIX timestamp in seconds to be displayed as publication date for the entry */
	timestamp?:number | null,	/** The status of the entry: `public` or `draft` */
	status?:string | null,	/** ID of associated NFT if there is one */
	nftId?:number | null,	/** Address for entry contributors */
	entryContributorAddresses?:(string | undefined | null)[],	/** ID of featured image if there is one */
	featuredImageId?:number | null,	/** ID of featured image if there is one */
	hideTitleInEntry?:boolean | null},ValueTypes["entry"]],
addSigningKey?: [{	/** The Ethereum address associated with the contributor */
	ethAddress?:string | null,	/** The public key for the EC keypair used for signing from a device */
	publicKey?:string | null,	/** The signature proving ownership of the signing key by the contributor */
	signature?:string | null},ValueTypes["signingKey"]],
addNonMemberSigningKey?: [{	/** The Ethereum address associated with the user */
	ethAddress?:string | null,	/** The public key for the EC keypair used for signing from a device */
	publicKey?:string | null,	/** The signature proving ownership of the signing key by the contributor */
	signature?:string | null},ValueTypes["signingKey"]],
_testSigning?: [{	address?:string | null,	signature?:string | null,	timestamp?:string | null},boolean],
updateEntry?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** The digest of the original entry's content */
	originalDigest?:string | null,	/** The entry's title */
	title?:string | null,	/** The entry's main content */
	body?:string | null,	/** The ENS label for the publication to publish to */
	ensLabel?:string | null,	/** The digest of the content's data */
	digest?:string | null,	/** The signature from the contributor's signing key */
	signature?:string | null,	/** The public key that signed the content */
	key?:string | null,	/** The UNIX timestamp in seconds to be displayed as publication date for the entry */
	timestamp?:number | null,	/** The status of the entry: `public` or `draft` */
	status?:string | null,	/** ID of associated NFT if there is one */
	nftId?:number | null,	/** Address for entry contributors */
	entryContributorAddresses?:(string | undefined | null)[],	/** ID of featured image if there is one */
	featuredImageId?:number | null,	/** ID of featured image if there is one */
	hideTitleInEntry?:boolean | null},ValueTypes["entry"]],
updateSettings?: [{	/** The label of the publication being updated */
	publicationLabel?:string | null,	/** New name for publication */
	publicationDisplayName?:string | null,	/** New publication avatar */
	publicationAvatarURL?:string | null,	/** New display name for contributor */
	contributorDisplayName?:string | null,	/** New contributor avatar URL */
	contributorAvatarURL?:string | null,	/** The UNIX timestamp in seconds */
	timestamp?:number | null,	/** The digest of the content's data */
	digest?:string | null,	/** The signature from the contributor's signing key */
	signature?:string | null,	/** The public key that signed the content */
	key?:string | null},boolean],
updatePublicationSettings?: [{	publicationLabel?:string | null,	settings?:string | null,	digest?:string | null,	contributorAddress?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:number | null},ValueTypes["publicationSettings"]],
verifyTweet?: [{	tweetId?:string | null,	account?:string | null},boolean],
verifyTweetV2?: [{	username?:string | null,	account?:string | null},boolean],
removeTwitter?: [{	address?:string | null,	signature?:string | null,	digest?:string | null,	key?:string | null,	timestamp?:string | null},boolean],
saveRegistrationEvent?: [{	ensLabel?:string | null,	account?:string | null,	transactionHash?:string | null},ValueTypes["registrationEvent"]],
verifyVote?: [{	candidate?:string | null,	round?:string | null,	signature?:string | null,	account?:string | null,	amount?:number | null},boolean],
createCrowdfund?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Name of the token */
	name?:string | null,	/** Token symbol */
	symbol?:string | null,	description?:string | null,	baseURI?:string | null,	tokenAddress?:string | null,	publishStatus?:string | null,	/** An Ethereum address that receives the funds */
	fundingRecipient?:string | null,	/** The address of the crowdfund */
	address?:string | null,	/** The soft-cap goal in wei */
	goal?:string | null,	/** The hard-cap goal in wei */
	stretchGoal?:string | null,	/** Network on which it's deployed: e.g. mainnet or rinkeby */
	network?:string | null,	/** Unix timestamp in seconds describing when the Crowdfund ends */
	endsAt?:number | null,	/** The version of the crowdfund being used */
	version?:string | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null,	/** Max contribution per address. Not enforced on-chain */
	contributionLimit?:string | null,	/** Address of the deployer */
	operator?:string | null,	/** Percentage of equity kept by the operator */
	operatorEquityPercent?:string | null,	editions?:(ValueTypes["EditionForSignatureType"] | undefined | null)[],	/** The ID of the draft */
	crowdfundDraftId?:number | null,	/** Crowdfund entry content - a JSON of the markdown. */
	content?:string | null,	/** Crowdfund entry metadata - a JSON of stuff like cover image, podium details, etc. */
	metadata?:string | null,	title?:string | null,	exchangeRate?:string | null},ValueTypes["crowdfund"]],
setCrowdfundTransactionHash?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Address of crowdfund */
	crowdfundAddress?:string | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null},boolean],
updateCrowdfund?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Crowdfund address */
	address?:string | null,	/** Crowdfund entry content - a JSON of the markdown. */
	content?:string | null},ValueTypes["crowdfund"]],
updateCrowdfundPublishStatus?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Crowdfund address */
	crowdfundAddress?:string | null,	/** Publish status */
	publishStatus?:string | null},ValueTypes["crowdfund"]],
createNFT?: [{	/** Name of the token */
	name?:string | null,	/** Token URI */
	tokenURI?:string | null,	/** The Ethereum address associated with the contributor */
	contributorAddress?:string | null,	/** The address of the NFT */
	address?:string | null,	/** Content hash */
	contentHash?:string | null,	/** Network on which it's deployed: e.g. mainnet or rinkeby */
	network?:string | null,	/** ID of token on contract */
	tokenId?:number | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null,	/** Digest of the entry */
	entryDigest?:string | null},ValueTypes["nft"]],
createReserveAuction?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** The name of the auction */
	name?:string | null,	/** Token ID for the NFT */
	tokenId?:number | null,	/** Number of seconds that the auction runs for */
	duration?:number | null,	/** Address of the auction contract */
	address?:string | null,	/** Address of the NFT contract */
	nftAddress?:string | null,	/** The address that receives funds for the auction sale */
	fundsRecipientAddress?:string | null,	/** Specified creator of the NFT */
	curatorAddress?:string | null,	/** Specified creator of the NFT */
	curatorFee?:string | null,	/** Specified creator of the NFT */
	version?:string | null,	/** Reserve price for the NFT */
	reservePrice?:string | null,	/** E.g. mainnet or rinkeby */
	network?:string | null,	/** Transaction hash for the createAuction call */
	transactionHash?:string | null,	/** Auction ID on the contract (eg keccak256(abi.encode(nftContractAddress, tokenId))) */
	auctionId?:string | null},ValueTypes["reserveAuction"]],
createPromptResponse?: [{	/** The content in the prompt response */
	content?:string | null,	/** ID for the respondent (FK to TwitterProfiles table) */
	respondentId?:number | null,	/** The signature of the prompt response */
	signature?:string | null,	/** String representation of the timestamp */
	timestamp?:string | null,	/** String representation of the timestamp */
	contentHash?:string | null},ValueTypes["promptResponse"]],
createSplit?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	name?:string | null,	address?:string | null,	transactionHash?:string | null,	network?:string | null},ValueTypes["SplitType"]],
createSplitAllocations?: [{	splitAllocations?:(ValueTypes["SplitAllocationInputType"] | undefined | null)[]},boolean],
createEdition?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	title?:string | null,	quantity?:number | null,	price?:number | null,	artifactThumbnailId?:number | null,	artifactPrimaryId?:number | null,	key?:string | null,	digest?:string | null,	signature?:string | null,	fundingRecipient?:string | null,	network?:string | null,	transactionHash?:string | null,	description?:string | null,	editionContractAddress?:string | null,	version?:string | null,	singleArtifact?:boolean | null,	crowdfundAddress?:string | null,	contentHash?:string | null,	baseUriHash?:string | null},ValueTypes["edition"]],
createCrowdfundEditions?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	editions?:(ValueTypes["EditionInputType"] | undefined | null)[],	key?:string | null,	digest?:string | null,	signature?:string | null,	fundingRecipient?:string | null,	network?:string | null,	transactionHash?:string | null,	editionContractAddress?:string | null,	version?:string | null,	crowdfundAddress?:string | null},ValueTypes["edition"]],
createEntryEditions?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	editions?:(ValueTypes["EditionInputType"] | undefined | null)[],	key?:string | null,	digest?:string | null,	signature?:string | null,	fundingRecipient?:string | null,	network?:string | null,	transactionHash?:string | null,	editionContractAddress?:string | null,	version?:string | null,	entryId?:number | null},ValueTypes["edition"]],
setEditionTransactionHash?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	ids?:(number | undefined | null)[],	transactionHash?:string | null,	fundingRecipient?:string | null,	network?:string | null},boolean],
setEditionTransactionHashWithUserProfile?: [{	ids?:(number | undefined | null)[],	userAddress?:string | null,	transactionHash?:string | null,	fundingRecipient?:string | null,	network?:string | null,	signature?:string | null,	digest?:string | null,	key?:string | null,	/** Unix timestamp in seconds */
	timestamp?:string | null},boolean],
createMediaAsset?: [{	mimetype?:string | null,	sizes?:ValueTypes["MediaAssetSizesInputType"] | null},ValueTypes["MediaAssetType"]],
addEmail?: [{	email?:string | null,	address?:string | null,	signature?:string | null,	digest?:string | null,	key?:string | null,	timestamp?:string | null},ValueTypes["email"]],
verifyEmail?: [{	token?:string | null},ValueTypes["email"]],
setWriteRaceNotification?: [{	address?:string | null,	value?:boolean | null,	signature?:string | null,	digest?:string | null,	timestamp?:string | null,	key?:string | null},boolean],
createUserProfile?: [{	address?:string | null,	displayName?:string | null,	avatarURL?:string | null},ValueTypes["UserProfileType"]],
updateUserProfile?: [{	address?:string | null,	settings?:string | null,	digest?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:string | null},ValueTypes["UserProfileType"]],
updateUserProfileTheme?: [{	address?:string | null,	digest?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:string | null,	colorMode?:ValueTypes["ColorModeType"] | null,	accent?:ValueTypes["AccentType"] | null},ValueTypes["UserProfileThemeType"]],
relinkEns?: [{	address?:string | null,	digest?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:string | null},ValueTypes["ENS"]],
setUserProfileHeaderImage?: [{	address?:string | null,	digest?:string | null,	key?:string | null,	signature?:string | null,	timestamp?:string | null,	headerImageId?:number | null},ValueTypes["MediaAssetType"]],
addSurveyResponse?: [{	address?:string | null,	content?:string | null,	signature?:string | null,	surveyId?:number | null,	contentHash?:string | null,	timestamp?:string | null,	crowdfundAddress?:string | null},boolean],
createCrowdfundDraft?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** Address of the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** JSON payload of the draft data */
	data?:string | null},ValueTypes["CrowdfundDraft"]],
editCrowdfundDraft?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** ID of the draft */
	id?:number | null,	/** JSON payload of the draft data */
	data?:string | null},ValueTypes["CrowdfundDraft"]],
deleteCrowdfundDraft?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** ID of the draft */
	id?:number | null},boolean],
createOrUpdateCrowdfundDraft?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** ID of the draft */
	id?:number | null,	/** JSON payload of the draft data */
	data?:string | null},ValueTypes["CrowdfundDraft"]],
setCrowdfundIdForCrowdfundDraft?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** ID of the draft */
	id?:number | null,	/** crowdfundId */
	crowdfundId?:number | null},boolean],
createProposal?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	digest?:string | null,	signature?:string | null,	timestamp?:number | null,	key?:string | null,	title?:string | null,	description?:string | null,	erc20Address?:string | null,	erc721Address?:string | null,	tokenIds?:(string | undefined | null)[],	coverImageId?:number | null,	tokenThreshold?:number | null,	startDate?:string | null,	endDate?:string | null,	prompt?:string | null,	highlightedWinners?:number | null,	entries?:(ValueTypes["ProposalEntryInput"] | undefined | null)[],	erc721Multiplier?:number | null},ValueTypes["Proposal"]],
cancelProposal?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	digest?:string | null,	signature?:string | null,	timestamp?:number | null,	key?:string | null,	/** cid of proposal */
	cid?:string | null},boolean],
voteOnProposal?: [{	/** Content hash */
	digest?:string | null,	signature?:string | null,	timestamp?:number | null,	address?:string | null,	/** cid of proposal */
	proposalCid?:string | null,	/** cid of proposal entry */
	proposalEntryCid?:string | null,	/** Votes to allocate */
	votes?:number | null,	/** Address of multisig */
	multisigAddress?:string | null},ValueTypes["ProposalUserVotingPower"]],
addMultisig?: [{	address?:string | null,	multisigAddress?:string | null,	signature?:string | null,	contentHash?:string | null,	/** Timestamp string in ms */
	timestamp?:string | null},boolean],
mirrorPollResponse?: [{	pollId?:number | null,	choiceId?:number | null,	address?:string | null,	signature?:string | null,	digest?:string | null,	key?:string | null,	/** Unix timestamp in seconds */
	timestamp?:string | null},boolean],
createMirrorERC20Token?: [{	/** Name of the token */
	name?:string | null,	/** Token symbol */
	symbol?:string | null,	/** Number of decimals */
	numDecimals?:number | null,	/** Total supply of tokens */
	totalSupply?:string | null,	description?:string | null,	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The address of the token */
	tokenAddress?:string | null,	/** Network on which it's deployed: e.g. mainnet or rinkeby */
	network?:string | null,	/** The version of the crowdfund being used */
	version?:string | null,	/** Address of the operator */
	operatorAddress?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	timestamp?:string | null,	/** Digest generated from content related to crowdfund */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	ensLabel?:string | null,	iconMediaAssetId?:number | null,	projectAddress?:string | null,	nonce?:number | null},ValueTypes["mirrorERC20Token"]],
setMirrorERC20TokenTransactionHash?: [{	/** Address of MirrorERC20 */
	tokenAddress?:string | null,	/** Address of user who created Mirror ERC20 token */
	userAddress?:string | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null,	/** Signature */
	signature?:string | null,	/** Digest */
	digest?:string | null,	/** Timestamp */
	timestamp?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null},boolean],
createEditionsOpenSale?: [{	h?:string | null,	contractAddress?:string | null,	userProfileId?:number | null,	token?:string | null,	startTokenId?:number | null,	endTokenId?:number | null,	operator?:string | null,	recipient?:string | null,	price?:string | null,	open?:boolean | null,	network?:string | null,	transactionHash?:string | null,	projectAddress?:string | null},ValueTypes["editionOpenSale"]],
createCrowdfundTokenApproval?: [{	/** Address of crowdfund */
	crowdfundAddress?:string | null,	/** Address of user that's logged in */
	userAddress?:string | null,	/** Approval amount */
	approvalAmount?:string | null,	/** Signature */
	signature?:string | null,	/** Digest */
	digest?:string | null,	/** Timestamp */
	timestamp?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null},boolean],
setTransactionHashForCrowdfundTokenApproval?: [{	/** Address of user who created Mirror ERC20 token */
	userAddress?:string | null,	/** Address of user who created Mirror ERC20 token */
	crowdfundAddress?:string | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null,	/** Signature */
	signature?:string | null,	/** Digest */
	digest?:string | null,	/** Timestamp */
	timestamp?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null},boolean],
createDutchAuction?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	name?:string | null,	description?:string | null,	subheading?:string | null,	editionContractAddress?:string | null,	dutchAuctionAddress?:string | null,	fundsRecipientAddress?:string | null,	version?:string | null,	network?:string | null,	startTokenId?:number | null,	endTokenId?:number | null,	pricesInEth?:(string | undefined | null)[],	interval?:number | null},ValueTypes["DutchAuctionType"]],
setDutchAuctionTransactionHash?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Address of the dutch auction */
	dutchAuctionAddress?:string | null,	/** Transaction hash when it was deployed */
	transactionHash?:string | null},boolean],
inviteProjectContributor?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Address of contributor */
	contributorAddress?:string | null},ValueTypes["ProjectType"]],
acceptProjectContributorInvite?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null},ValueTypes["ProjectType"]],
revokeProjectContributor?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Address of contributor */
	contributorAddress?:string | null},ValueTypes["ProjectType"]],
updateProject?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	settings?:string | null},ValueTypes["ProjectType"]],
setProjectHeaderImage?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	headerImageId?:number | null},ValueTypes["MediaAssetType"]],
updateProjectTheme?: [{	/** Address of project */
	projectAddress?:string | null,	/** Address of user making the request */
	userAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the data */
	key?:string | null,	/** Signature with content */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	colorMode?:ValueTypes["ColorModeType"] | null,	accent?:ValueTypes["AccentType"] | null},ValueTypes["ProjectThemeType"]],
updatePluginStatus?: [{	/** The Ethereum address associated with the user */
	userAddress?:string | null,	/** The Ethereum address associated with the project */
	projectAddress?:string | null,	/** Digest */
	digest?:string | null,	/** Public key used to sign the crowdfund data */
	key?:string | null,	/** Signature with content related to the crowdfund */
	signature?:string | null,	/** Unix Timestamp in seconds */
	timestamp?:string | null,	/** Database ID for a plugin record */
	pluginId?:number | null,	/** Whether to install or uinstall the plugin */
	install?:boolean | null},ValueTypes["PluginType"]],
		__typename?: boolean
}>;
	/** Success type */
["success"]: AliasType<{
	success?:boolean,
		__typename?: boolean
}>;
	/** Edition For Signature type */
["EditionForSignatureType"]: {
	title?:string | null,
	description?:string | null,
	quantity?:number | null,
	price?:number | null,
	contentHash?:string | null
};
	/** description */
["SplitAllocationInputType"]: {
	splitId?:number | null,
	address?:string | null,
	scaledPercent?:number | null
};
	/** Edition Input type */
["EditionInputType"]: {
	title?:string | null,
	description?:string | null,
	quantity?:number | null,
	price?:number | null,
	contentHash?:string | null,
	artifactPrimaryId?:number | null,
	artifactThumbnailId?:number | null,
	singleArtifact?:boolean | null,
	attributes?:(ValueTypes["EditionAttributeInputType"] | undefined | null)[]
};
	/** description */
["EditionAttributeInputType"]: {
	trait_type?:string | null,
	display_type?:string | null,
	value?:string | null
};
	/** description */
["MediaAssetSizesInputType"]: {
	og?:ValueTypes["MediaAssetSizeInputType"] | null,
	lg?:ValueTypes["MediaAssetSizeInputType"] | null,
	md?:ValueTypes["MediaAssetSizeInputType"] | null,
	sm?:ValueTypes["MediaAssetSizeInputType"] | null
};
	/** description */
["MediaAssetSizeInputType"]: {
	height?:number | null,
	width?:number | null,
	src?:string | null,
	size?:string | null
};
	/** Proposal entry input (single) */
["ProposalEntryInput"]: {
	body?:string | null,
	address?:string | null,
	twitterUsername?:string | null
};
	/** Project Theme */
["ProjectThemeType"]: AliasType<{
	colorMode?:boolean,
	accent?:boolean,
		__typename?: boolean
}>
  }

export type ModelTypes = {
    /** Publication type */
["publication"]: {
		id?:number,
	ensLabel?:string,
	displayName?:string,
	avatarURL?:string,
	entries?:(ModelTypes["entry"] | undefined)[],
	crowdfundEntries?:(ModelTypes["crowdfund"] | undefined)[],
	posts?:(ModelTypes["PostType"] | undefined)[],
	publicationSettings?:ModelTypes["publicationSettings"],
	contributors?:(ModelTypes["contributor"] | undefined)[],
	nft?:ModelTypes["nft"]
};
	/** Crowdfund type */
["crowdfund"]: {
		_id?:string,
	id?:number,
	crowdfundDraftId?:number,
	name?:string,
	symbol?:string,
	title?:string,
	contributorAddress?:string,
	description?:string,
	content?:string,
	publication?:ModelTypes["publication"],
	operator?:ModelTypes["UserProfileType"],
	address?:string,
	fundingRecipient?:string,
	goal?:string,
	stretchGoal?:string,
	network?:string,
	transactionHash?:string,
	contributionLimit?:string,
	endsAt?:number,
	version?:string,
	editions?:(ModelTypes["edition"] | undefined)[],
	metadata?:ModelTypes["CrowdfundMetadataType"],
	publishStatus?:string,
	createdAt?:string,
	blockState?:ModelTypes["BlockStateType"],
	exchangeRate?:string,
	token?:ModelTypes["mirrorERC20Token"],
	publisher?:ModelTypes["PublisherType"]
};
	["UserProfileType"]: {
		address?:string,
	displayName?:string,
	avatarURL?:string,
	contributor?:ModelTypes["contributor"],
	nfts?:(ModelTypes["NFTType"] | undefined)[],
	editions?:ModelTypes["EditionsType"],
	notificationSettings?:ModelTypes["NotificationSettingsType"],
	theme?:ModelTypes["UserProfileThemeType"],
	ens?:string,
	headerImage?:ModelTypes["MediaAssetType"],
	description?:string,
	gaTrackingID?:string,
	mailingListURL?:string,
	domain?:string,
	memberships?:(ModelTypes["ProjectType"] | undefined)[],
	members?:(ModelTypes["ProjectType"] | undefined)[]
};
	/** Contributor type */
["contributor"]: {
		address?:string,
	id?:string,
	displayName?:string,
	avatarURL?:string,
	publications?:(ModelTypes["publication"] | undefined)[],
	signingKeys?:(ModelTypes["signingKey"] | undefined)[]
};
	/** Returns information about a signing key */
["signingKey"]: {
		id?:number,
	publicKey?:string,
	signature?:ModelTypes["signingKeySignature"]
};
	/** Display the signature proving ownership of a signing key */
["signingKeySignature"]: {
		id?:number,
	signingKeyId?:number,
	signature?:string,
	message?:string
};
	["NFTType"]: {
		contract?:ModelTypes["NFTContractType"],
	name?:string,
	tokenId?:string,
	imageURL?:string,
	imagePreviewUrl?:string,
	imageThumbnailUrl?:string,
	imageOriginalUrl?:string,
	animationUrl?:string,
	animationOriginalUrl?:string
};
	["NFTContractType"]: {
		address?:string,
	name?:string,
	symbol?:string
};
	["EditionsType"]: {
		purchased?:(ModelTypes["EditionPurchasedType"] | undefined)[]
};
	["EditionPurchasedType"]: {
		blockNumber?:number,
	transactionHash?:string,
	logIndex?:number,
	event?:string,
	editionId?:string,
	tokenId?:string,
	numSold?:string,
	serial?:string,
	amountPaid?:string,
	buyer?:string,
	edition?:ModelTypes["edition"]
};
	/** Edition type */
["edition"]: {
		_id?:string,
	id?:number,
	title?:string,
	quantity?:number,
	description?:string,
	price?:number,
	allocation?:number,
	editionId?:number,
	entryId?:number,
	contentHash?:string,
	fundingRecipient?:string,
	transactionHash?:string,
	editionContractAddress?:string,
	version?:string,
	singleArtifact?:boolean,
	attributes?:(ModelTypes["EditionAttribute"] | undefined)[],
	crowdfund?:ModelTypes["crowdfund"],
	primaryMedia?:ModelTypes["MediaAssetType"],
	thumbnailMedia?:ModelTypes["MediaAssetType"],
	mediaURL?:string,
	artifacts?:(ModelTypes["editionArtifact"] | undefined)[],
	operator?:ModelTypes["UserProfileType"],
	creator?:ModelTypes["contributor"],
	publication?:ModelTypes["publication"],
	entry?:ModelTypes["entry"],
	events?:(ModelTypes["EditionEventsType"] | undefined)[],
	tokenIds?:(string | undefined)[],
	publisher?:ModelTypes["PublisherType"],
	blockState?:ModelTypes["BlockStateType"]
};
	/** Edition Attribute type */
["EditionAttribute"]: {
		trait_type?:string,
	display_type?:string,
	value?:string
};
	/** description */
["MediaAssetType"]: {
		id?:number,
	mimetype?:string,
	sizes?:ModelTypes["MediaAssetSizesType"],
	url?:string
};
	/** description */
["MediaAssetSizesType"]: {
		og?:ModelTypes["MediaAssetSizeType"],
	lg?:ModelTypes["MediaAssetSizeType"],
	md?:ModelTypes["MediaAssetSizeType"],
	sm?:ModelTypes["MediaAssetSizeType"]
};
	/** description */
["MediaAssetSizeType"]: {
		height?:number,
	width?:number,
	src?:string
};
	/** Edition Artifact type */
["editionArtifact"]: {
		tokenId?:number,
	editionId?:number,
	url?:string
};
	/** Events for an edition with contract address and ID */
["EditionEventsType"]: {
		event?:string,
	blockNumber?:number,
	logIndex?:number,
	transactionHash?:string,
	network?:string,
	quantity?:string,
	price?:string,
	fundingRecipient?:string,
	editionId?:string,
	tokenId?:string,
	numSold?:string,
	buyer?:string,
	feePercent?:string,
	sender?:string,
	newFee?:string,
	feesAccrued?:string,
	previousOwner?:string,
	newOwner?:string,
	amountWithdrawn?:string,
	feeAmount?:string,
	amountPaid?:string,
	contentHash?:string,
	receiver?:string,
	previousCreator?:string,
	newCreator?:string,
	from?:string,
	to?:string,
	owner?:string,
	approved?:string,
	operator?:string,
	avatarURL?:string,
	twitterUsername?:string,
	collectorAddress?:string,
	serialNumber?:string
};
	/** The publisher of the block */
["PublisherType"]: {
		/** The project that published the block */
	project?:ModelTypes["ProjectType"],
	/** The member that published on behalf of the project */
	member?:ModelTypes["ProjectType"]
};
	["ProjectType"]: {
		_id?:string,
	address?:string,
	displayName?:string,
	avatarURL?:string,
	notificationSettings?:ModelTypes["NotificationSettingsType"],
	theme?:ModelTypes["UserProfileThemeType"],
	ens?:string,
	headerImage?:ModelTypes["MediaAssetType"],
	description?:string,
	gaTrackingID?:string,
	mailingListURL?:string,
	domain?:string,
	memberships?:(ModelTypes["ProjectType"] | undefined)[],
	members?:(ModelTypes["ProjectType"] | undefined)[],
	pendingMemberships?:(ModelTypes["ProjectType"] | undefined)[],
	pendingMembers?:(ModelTypes["ProjectType"] | undefined)[],
	posts?:(ModelTypes["PostType"] | undefined)[],
	featureFlags?:ModelTypes["FeatureFlagStatusType"],
	navigation?:ModelTypes["NavigationType"]
};
	["NotificationSettingsType"]: {
		writeRace?:boolean
};
	/** User Profile Theme */
["UserProfileThemeType"]: {
		colorMode?:ModelTypes["ColorModeType"],
	accent?:ModelTypes["AccentType"]
};
	["ColorModeType"]: GraphQLTypes["ColorModeType"];
	["AccentType"]: GraphQLTypes["AccentType"];
	["PostType"]:ModelTypes["entry"] | ModelTypes["crowdfund"];
	["FeatureFlagStatusType"]: {
		isPluginsTabEnabled?:boolean
};
	["NavigationType"]: {
		section?:ModelTypes["NavigationSectionType"],
	content?:ModelTypes["NavigationContentType"]
};
	["NavigationSectionType"]: {
		isFundingEnabled?:boolean,
	isNFTsEnabled?:boolean,
	isGovernanceEnabled?:boolean
};
	["NavigationContentType"]: {
		isCrowdfundsEnabled?:boolean,
	isSplitsEnabled?:boolean,
	isTokensEnabled?:boolean,
	isEditionsEnabled?:boolean,
	isTokenRaceEnabled?:boolean,
	isAuctionsEnabled?:boolean
};
	/** Provides information about the state of the block */
["BlockStateType"]: {
		/** Status of the block */
	status?:ModelTypes["BlockStatusEnum"]
};
	["BlockStatusEnum"]: GraphQLTypes["BlockStatusEnum"];
	/** CrowdfundMetadata Type */
["CrowdfundMetadataType"]: {
		coverImage?:ModelTypes["MediaAssetType"],
	podium?:ModelTypes["PodiumType"]
};
	/** Podium Type */
["PodiumType"]: {
		first?:ModelTypes["PodiumFieldType"],
	second?:ModelTypes["PodiumFieldType"],
	third?:ModelTypes["PodiumFieldType"],
	duration?:number
};
	/** PodiumField Type */
["PodiumFieldType"]: {
		title?:string,
	description?:string,
	primaryMedia?:ModelTypes["MediaAssetType"],
	thumbnailMedia?:ModelTypes["MediaAssetType"]
};
	/** MirrorERC20Token type */
["mirrorERC20Token"]: {
		id?:number,
	name?:string,
	symbol?:string,
	numDecimals?:string,
	totalSupply?:string,
	totalSupplyFormatted?:string,
	operator?:ModelTypes["UserProfileType"],
	description?:string,
	publication?:ModelTypes["publication"],
	tokenAddress?:string,
	iconMedia?:ModelTypes["MediaAssetType"],
	network?:string,
	transactionHash?:string,
	contributionLimit?:string,
	ownerAddress?:string,
	version?:string,
	createdAt?:string,
	publisher?:ModelTypes["PublisherType"]
};
	/** Publication Settings type */
["publicationSettings"]: {
		publicationLabel?:string,
	settings?:string,
	digest?:string,
	contributorAddress?:string,
	key?:string,
	signature?:string,
	timestamp?:number
};
	/** NFT type */
["nft"]: {
		id?:number,
	name?:string,
	tokenURI?:string,
	contributorAddress?:string,
	address?:string,
	contentHash?:string,
	network?:string,
	tokenId?:number,
	transactionHash?:string,
	entryDigest?:string
};
	/** Entry type */
["entry"]: {
		_id?:string,
	id?:number,
	entryId?:number,
	digest?:string,
	originalDigest?:string,
	title?:string,
	hideTitleInEntry?:boolean,
	body?:string,
	timestamp?:number,
	publishedAtTimestamp?:number,
	publishStatus?:string,
	canonicalUrl?:string,
	publicationId?:number,
	userProfileId?:number,
	featuredImageId?:number,
	arweaveTransactionRequest?:ModelTypes["ArweaveTransactionRequestType"],
	/** Transaction hash that includes NFT event */
	nftTransactionHash?:string,
	/** address of the token that has the NFT */
	nftAddress?:number,
	/** Optional token id of the NFT */
	nftTokenId?:number,
	publication?:ModelTypes["publication"],
	userProfile?:ModelTypes["UserProfileType"],
	contributor?:ModelTypes["contributor"],
	author?:ModelTypes["UserProfileType"],
	nft?:ModelTypes["nft"],
	authorship?:ModelTypes["Authorship"],
	contributors?:(ModelTypes["contributor"] | undefined)[],
	editions?:(ModelTypes["edition"] | undefined)[],
	featuredImage?:ModelTypes["MediaAssetType"],
	publisher?:ModelTypes["PublisherType"],
	collaborators?:(ModelTypes["ProjectType"] | undefined)[]
};
	/** Describes an Arweave Transaction Request */
["ArweaveTransactionRequestType"]: {
		id?:number,
	transactionId?:string,
	entryId?:number
};
	/** Contains verification of authorship */
["Authorship"]: {
		publicKey?:string,
	signature?:string
};
	/** API Queries [Read] */
["query"]: {
		publication?:ModelTypes["publication"],
	publicationFeed?:ModelTypes["publication"],
	publicationContributors?:(ModelTypes["contributor"] | undefined)[],
	publications?:(ModelTypes["publication"] | undefined)[],
	/** Endpoint for querying a contributor's information */
	contributor?:ModelTypes["contributor"],
	/** Endpoint for querying a contributor's information */
	contributorsByAddress?:(ModelTypes["contributor"] | undefined)[],
	nextContributorId?:number,
	/** Endpoint for querying an Entry by digest */
	entry?:ModelTypes["entry"],
	/** All the entries for a user address */
	entries?:(ModelTypes["entry"] | undefined)[],
	/** Endpoint for returning ENS information for a given domain */
	resolveENS?:ModelTypes["ENS"],
	/** Endpoint for returning ENS information for a given address */
	lookupENS?:ModelTypes["ENS"],
	/** Endpoint for querying a contributor's profile information */
	addressInfo?:ModelTypes["addressInfo"],
	/** Endpoint for querying for settings for a publication */
	publicationSettings?:ModelTypes["publicationSettings"],
	verifiedAccounts?:(ModelTypes["VerifiedAccount"] | undefined)[],
	verifiedAccount?:ModelTypes["VerifiedAccount"],
	/** Endpoint for getting whether a user is verified */
	isVerified?:boolean,
	verifiedAccountsAfterTimestamp?:(ModelTypes["VerifiedAccount"] | undefined)[],
	registrationEvent?:ModelTypes["registrationEvent"],
	registrationEvents?:(ModelTypes["registrationEvent"] | undefined)[],
	registeredProfiles?:(ModelTypes["RegisteredProfile"] | undefined)[],
	verifiedVotes?:(ModelTypes["VerifiedVoteType"] | undefined)[],
	votingPower?:ModelTypes["VotingPowerType"],
	verifiedVotesByRound?:(ModelTypes["VerifiedVoteType"] | undefined)[],
	/** Endpoint for querying a user's crowdfunds */
	crowdfunds?:(ModelTypes["CrowdfundListType"] | undefined)[],
	/** Get dropped crowdfunds */
	droppedCrowdfunds?:(ModelTypes["crowdfund"] | undefined)[],
	/** Endpoint for querying a crowdfund at an address */
	crowdfundAtAddress?:ModelTypes["crowdfund"],
	/** Endpoint for querying a crowdfund at an address */
	crowdfundBlockData?:ModelTypes["CrowdfundBlock"],
	/** Endpoint for querying a user's crowdfund entries */
	crowdfundEntries?:(ModelTypes["crowdfund"] | undefined)[],
	/** Endpoint for querying a contributor's NFTs */
	nfts?:(ModelTypes["nft"] | undefined)[],
	/** Endpoint for querying a single NFT */
	nft?:ModelTypes["nft"],
	/** Endpoint for querying a project reserveAuctions */
	reserveAuctions?:(ModelTypes["reserveAuction"] | undefined)[],
	/** Endpoint for querying a reserve auction by tokenId at an address */
	reserveAuction?:ModelTypes["reserveAuction"],
	socialProfiles?:(ModelTypes["SocialProfileType"] | undefined)[],
	socialProfile?:ModelTypes["SocialProfileType"],
	writeRaceProfiles?:(ModelTypes["WriteRaceProfileType"] | undefined)[],
	leaderboard?:(ModelTypes["LeaderboardType"] | undefined)[],
	twitterProfile?:ModelTypes["TwitterProfileType"],
	twitterProfilesById?:(ModelTypes["TwitterProfileType"] | undefined)[],
	splits?:(ModelTypes["SplitType"] | undefined)[],
	split?:ModelTypes["SplitType"],
	unverifiedTwitterProfiles?:(ModelTypes["UnverifiedTwitterProfileType"] | undefined)[],
	/** Endpoint for querying a contributor's editions for a publication */
	editions?:(ModelTypes["edition"] | undefined)[],
	edition?:ModelTypes["edition"],
	/** Endpoint for querying a user's activity feed */
	userActivityFeed?:(ModelTypes["ActivityPropertiesType"] | undefined)[],
	/** Endpoint for querying a user's email verification status */
	email?:ModelTypes["email"],
	/** Endpoint for querying a crowdfund's event data */
	crowdfundEvents?:(ModelTypes["crowdfundEvents"] | undefined)[],
	userProfile?:ModelTypes["UserProfileType"],
	me?:ModelTypes["ProjectType"],
	verifyPublicKey?:ModelTypes["PublicKeyVerification"],
	address?:string,
	mirrorProject?:ModelTypes["MirrorProjectType"],
	projectThemeOptions?:ModelTypes["ProjectThemeOptionsType"],
	/** Endpoint for querying a whether a user has responded to a survey */
	hasUserSubmittedSurvey?:boolean,
	getSurvey?:ModelTypes["SurveyType"],
	/** Endpoint for querying a contributor's crowdfund drafts */
	crowdfundDraftById?:ModelTypes["CrowdfundDraft"],
	/** Endpoint for querying all contracts */
	contracts?:(ModelTypes["Contract"] | undefined)[],
	/** Endpoint for querying proposals made by user */
	proposals?:(ModelTypes["Proposal"] | undefined)[],
	/** Endpoint for querying a single proposal */
	proposal?:ModelTypes["Proposal"],
	/** Endpoint for querying voting data for user */
	proposalVotingPower?:ModelTypes["ProposalUserVotingPower"],
	/** Endpoint for querying vote data for an entry */
	proposalEntryVotes?:(ModelTypes["ProposalEntryVote"] | undefined)[],
	writeRaceSearch?:(ModelTypes["WriteRaceRoundDataType"] | undefined)[],
	writeRaceVotingPower?:ModelTypes["WriteRaceVotingPowerType"],
	writeRaceCurrentUser?:ModelTypes["WriteRaceCurrentUser"],
	writeRaceCurrentRound?:ModelTypes["WriteRaceCurrentRound"],
	writeRaceLeaderboard?:ModelTypes["WriteRaceLeaderboardType"],
	writeRaceGenesisWriters?:(ModelTypes["WriteRaceLeaderboardWinnerType"] | undefined)[],
	mirrorPoll?:ModelTypes["MirrorPollType"],
	mirrorPollCanRespond?:boolean,
	mirrorPollUser?:ModelTypes["MirrorPollUser"],
	/** Endpoint for querying a dutch auction */
	dutchAuction?:ModelTypes["DutchAuctionType"],
	editionOpenSale?:ModelTypes["editionOpenSale"],
	/** Endpoint for querying a user's tokens created on Mirror */
	mirrorERC20Tokens?:(ModelTypes["mirrorERC20Token"] | undefined)[],
	/** Endpoint for querying a token at an address */
	mirrorERC20TokenAtAddress?:ModelTypes["mirrorERC20Token"],
	/** Endpoint for querying a user's tokens created on Mirror */
	crowdfundTokenApprovalMetadata?:ModelTypes["crowdfundTokenApprovalMetadata"],
	/** Endpoint for querying a project feed by ens name, domain, or address */
	projectFeed?:ModelTypes["ProjectType"],
	/** Endpoint for querying all plugins for a project */
	plugins?:(ModelTypes["PluginType"] | undefined)[],
	/** List of all available plugins */
	pluginsList?:(ModelTypes["PluginType"] | undefined)[]
};
	/** ENS type */
["ENS"]: {
		name?:string,
	address?:string
};
	/** Provides some basic information about an Etheruem address */
["addressInfo"]: {
		ens?:string,
	writeTokens?:string,
	hasOnboarded?:boolean
};
	["VerifiedAccount"]: {
		twitterProfileId?:number,
	account?:string,
	username?:string,
	signature?:string,
	name?:string,
	twitterId?:string,
	avatarURL?:string,
	followerCount?:number,
	promptResponse?:ModelTypes["promptResponse"]
};
	/** PromptResponse type */
["promptResponse"]: {
		id?:number,
	content?:string,
	createdAt?:string
};
	/** RegistrationEvent type */
["registrationEvent"]: {
		id?:number,
	account?:string,
	ensLabel?:string,
	transactionHash?:string
};
	["RegisteredProfile"]: {
		id?:number,
	account?:string,
	username?:string,
	avatarURL?:string
};
	["VerifiedVoteType"]: {
		account?:string,
	candidate?:string,
	round?:string,
	signature?:string,
	amount?:number,
	createdAt?:number
};
	["VotingPowerType"]: {
		account?:string,
	votingPower?:number,
	round?:string,
	reasons?:string
};
	["CrowdfundListType"]:ModelTypes["CrowdfundDraft"] | ModelTypes["crowdfund"];
	/** CrowdfundDraft type */
["CrowdfundDraft"]: {
		_id?:string,
	id?:number,
	data?:string,
	name?:string,
	symbol?:string,
	title?:string,
	crowdfundDraftId?:number,
	publisher?:ModelTypes["PublisherType"]
};
	/** CrowdfundBlock type */
["CrowdfundBlock"]: {
		name?:string,
	symbol?:string,
	contractAddress?:string,
	valueCurrent?:string,
	stretchGoal?:number,
	fundingCap?:number,
	tokensIssued?:string,
	isRedeemable?:boolean,
	isActive?:boolean,
	operatorEquityPercent?:string,
	contributionLimit?:string,
	fundingRecipientAddress?:string,
	operator?:ModelTypes["UserProfileType"],
	backers?:(ModelTypes["CrowdfundBacker"] | undefined)[],
	events?:(ModelTypes["CrowdfundEvent"] | undefined)[],
	podiumDuration?:number,
	podiumStartTime?:number,
	minPodiumBid?:string,
	accountBalance?:string,
	totalSupply?:string,
	status?:string
};
	/** CrowdfundBacker Type */
["CrowdfundBacker"]: {
		eth?:string,
	tokens?:string,
	address?:string,
	blockNumber?:number,
	avatarURL?:string,
	twitterUsername?:string,
	percentage?:string
};
	/** CrowdfundEvent Type */
["CrowdfundEvent"]: {
		id?:number,
	event?:string,
	amount?:string,
	amountRaised?:string,
	amountFormatted?:number,
	amountRaisedFormatted?:string,
	creatorAllocation?:string,
	value?:string,
	address?:string,
	from?:string,
	to?:string,
	blockNumber?:number,
	logIndex?:number,
	network?:string,
	transactionHash?:string,
	editionId?:number,
	tokenId?:number,
	crowdfundId?:number,
	timestamp?:string
};
	/** ReserveAuction type */
["reserveAuction"]: {
		_id?:string,
	id?:number,
	tokenId?:number,
	duration?:number,
	address?:string,
	nftAddress?:string,
	auctionId?:string,
	creatorShareRecipientAddress?:string,
	creatorAddress?:string,
	fundsRecipientAddress?:string,
	deployerAddress?:string,
	curatorAddress?:string,
	curatorFee?:string,
	version?:string,
	reservePrice?:string,
	network?:string,
	transactionHash?:string,
	createdAt?:string,
	events?:(ModelTypes["ReserveAuctionEvent"] | undefined)[],
	operator?:ModelTypes["UserProfileType"],
	deployer?:ModelTypes["contributor"],
	publication?:ModelTypes["publication"],
	publisher?:ModelTypes["PublisherType"]
};
	/** ReserveAuctionEvent type */
["ReserveAuctionEvent"]: {
		event?:string,
	blockNumber?:number,
	logIndex?:number,
	transactionHash?:string,
	network?:string,
	nftContractAddress?:string,
	tokenId?:string,
	curator?:string,
	amount?:string,
	winner?:string,
	nftCreator?:string,
	fundsRecipient?:string,
	value?:string,
	sender?:string,
	duration?:string,
	reservePrice?:string,
	curatorFeePercent?:string,
	creator?:string,
	originalCreator?:string,
	zoraAddress?:string,
	creatorShareRecipient?:string,
	firstBid?:string,
	extended?:string,
	timestamp?:string,
	auctionId?:string
};
	["SocialProfileType"]: {
		address?:string,
	twitter?:ModelTypes["TwitterProfileType"],
	mirror?:ModelTypes["MirrorProfileType"]
};
	["TwitterProfileType"]: {
		id?:number,
	username?:string,
	avatarURL?:string,
	twitterId?:string,
	followerCount?:number,
	name?:string
};
	["MirrorProfileType"]: {
		contributor?:ModelTypes["contributor"]
};
	["WriteRaceProfileType"]: {
		address?:string,
	twitter?:ModelTypes["TwitterProfileType"],
	mirror?:ModelTypes["MirrorProfileType"],
	promptResponse?:ModelTypes["promptResponse"]
};
	["LeaderboardType"]: {
		title?:string,
	numVotes?:number,
	candidates?:number,
	profiles?:(ModelTypes["LeaderboardProfileType"] | undefined)[]
};
	["LeaderboardProfileType"]: {
		numVotes?:number,
	votingPower?:number,
	account?:string,
	username?:string,
	avatarURL?:string,
	followerCount?:number,
	backers?:(ModelTypes["LeaderboardBackerType"] | undefined)[],
	ensDomain?:string,
	notHighlighted?:boolean
};
	["LeaderboardBackerType"]: {
		amount?:number,
	account?:string,
	username?:string,
	avatarURL?:string,
	followerCount?:number
};
	/** Returns information about a split */
["SplitType"]: {
		_id?:string,
	id?:number,
	name?:string,
	address?:string,
	transactionHash?:string,
	network?:string,
	splitAllocations?:(ModelTypes["SplitAllocationType"] | undefined)[],
	events?:(ModelTypes["SplitEventType"] | undefined)[],
	operator?:ModelTypes["UserProfileType"],
	publication?:ModelTypes["publication"],
	publisher?:ModelTypes["PublisherType"]
};
	/** Returns information about a split allocation */
["SplitAllocationType"]: {
		id?:number,
	address?:string,
	scaledPercent?:number,
	splitAmount?:number,
	account?:string,
	userProfile?:ModelTypes["UserProfileType"]
};
	/** Events for a split */
["SplitEventType"]: {
		event?:string,
	account?:string,
	amount?:string,
	amountFormatted?:string,
	asset?:string,
	blockNumber?:number,
	category?:string,
	currentWindow?:string,
	from?:string,
	fundsAvailable?:string,
	fundsAvailableFormatted?:string,
	logIndex?:number,
	network?:string,
	success?:string,
	to?:string,
	transactionHash?:string
};
	["UnverifiedTwitterProfileType"]: {
		id?:number,
	address?:string,
	twitterProfile?:ModelTypes["TwitterProfileType"]
};
	["ActivityPropertiesType"]: {
		key?:string,
	detailValue?:string
};
	/** Email type */
["email"]: {
		verificationStatus?:ModelTypes["VerificationStatusEnum"]
};
	["VerificationStatusEnum"]: GraphQLTypes["VerificationStatusEnum"];
	/** Crowdfund Events type */
["crowdfundEvents"]: {
		event?:string,
	amount?:string,
	amountRaised?:string,
	amountFormatted?:number,
	amountRaisedFormatted?:number,
	creatorAllocation?:string,
	value?:string,
	address?:string,
	from?:string,
	to?:string,
	blockNumber?:number,
	logIndex?:number,
	network?:string,
	transactionHash?:string,
	tokenId?:string,
	editionId?:string
};
	["PublicKeyVerification"]: {
		address?:string
};
	["MirrorProjectType"]: {
		isRegistered?:boolean,
	projectDetails?:ModelTypes["ProjectType"]
};
	/** Project Theme */
["ProjectThemeOptionsType"]: {
		colorModes?:(string | undefined)[],
	accents?:(string | undefined)[]
};
	/** Type for a survey */
["SurveyType"]: {
		prompt?:string,
	backers?:(string | undefined)[],
	title?:string,
	description?:string
};
	/** Contract type */
["Contract"]: {
		name?:string,
	abi?:string,
	address?:string,
	version?:string
};
	/** Proposal Type */
["Proposal"]: {
		_id?:string,
	cid?:string,
	erc20Address?:string,
	erc721Address?:string,
	startDate?:string,
	endDate?:string,
	tokenName?:string,
	tokenSymbol?:string,
	title?:string,
	description?:string,
	prompt?:string,
	tokenThreshold?:number,
	tokenIds?:(string | undefined)[],
	highlightedWinners?:number,
	coverImage?:ModelTypes["MediaAssetType"],
	status?:string,
	snapshot?:ModelTypes["ProposalSnapshot"],
	results?:(ModelTypes["ProposalResult"] | undefined)[],
	resultsCid?:string,
	entries?:(ModelTypes["ProposalEntry"] | undefined)[],
	operator?:ModelTypes["UserProfileType"],
	publication?:ModelTypes["publication"],
	erc721Multiplier?:number,
	publisher?:ModelTypes["PublisherType"]
};
	/** Proposal Snapshot Type */
["ProposalSnapshot"]: {
		cid?:string,
	blockNumber?:string
};
	/** Proposal Type */
["ProposalResult"]: {
		votes?:number,
	proposalEntryCid?:string,
	proposalCid?:string,
	body?:string,
	entryAuthorAddress?:string,
	isHighlighted?:boolean,
	position?:number
};
	/** Proposal Entry Type */
["ProposalEntry"]: {
		address?:string,
	body?:string,
	cid?:string,
	proposalCid?:string,
	votes?:number,
	twitter?:ModelTypes["TwitterProfileType"]
};
	/** proposal voting power (user) */
["ProposalUserVotingPower"]: {
		totalVotes?:number,
	availableVotes?:number,
	multisigs?:(ModelTypes["ProposalVotingPowerMultisig"] | undefined)[]
};
	/** proposal voting power (multisig) */
["ProposalVotingPowerMultisig"]: {
		totalVotes?:number,
	availableVotes?:number,
	address?:string
};
	/** Proposal entry vote data */
["ProposalEntryVote"]: {
		votes?:number,
	address?:string,
	twitter?:ModelTypes["TwitterProfileType"]
};
	/** Write race round responses data */
["WriteRaceRoundDataType"]: {
		address?:string,
	votes?:number,
	voters?:(ModelTypes["WriteRaceVoterDataType"] | undefined)[],
	twitter?:ModelTypes["TwitterProfileType"],
	response?:string,
	score?:number
};
	/** Write race voter data for prompt response */
["WriteRaceVoterDataType"]: {
		address?:string,
	twitter?:ModelTypes["TwitterProfileType"],
	votes?:number
};
	/** Voting Power */
["WriteRaceVotingPowerType"]: {
		totalVotes?:number,
	availableVotes?:number
};
	/** Current User Details */
["WriteRaceCurrentUser"]: {
		address?:string,
	votes?:number,
	voters?:(ModelTypes["WriteRaceVoterDataType"] | undefined)[],
	twitter?:ModelTypes["TwitterProfileType"],
	response?:string,
	isRegistered?:boolean,
	isWinner?:boolean,
	rank?:number
};
	/** Current round details */
["WriteRaceCurrentRound"]: {
		round?:number,
	status?:string,
	startsAt?:string,
	endsAt?:string,
	roundDetails?:ModelTypes["WriteRaceRoundType"],
	isQuadratic?:boolean,
	isPaused?:boolean
};
	/** Write race round data */
["WriteRaceRoundType"]: {
		roundData?:(ModelTypes["WriteRaceRoundDataType"] | undefined)[],
	votesCast?:number,
	candidates?:number,
	currentPrompt?:string,
	roundNumber?:number,
	voters?:number
};
	["WriteRaceLeaderboardType"]: {
		isQuadratic?:boolean,
	votes?:number,
	candidates?:number,
	winners?:(ModelTypes["WriteRaceLeaderboardWinnerType"] | undefined)[],
	voters?:number
};
	/** Write Race Winner */
["WriteRaceLeaderboardWinnerType"]: {
		voters?:(ModelTypes["WriteRaceVoterDataType"] | undefined)[],
	address?:string,
	votes?:number,
	score?:number,
	votingPower?:number,
	twitter?:ModelTypes["TwitterProfileType"],
	ensLabel?:string
};
	/** mirror poll */
["MirrorPollType"]: {
		_id?:string,
	id?:number,
	title?:string,
	description?:string,
	prompt?:string,
	status?:ModelTypes["MirrorPollStatusEnum"],
	endsAt?:string,
	startsAt?:string,
	coverImage?:ModelTypes["MediaAssetType"],
	choices?:(ModelTypes["MirrorPollChoice"] | undefined)[]
};
	["MirrorPollStatusEnum"]: GraphQLTypes["MirrorPollStatusEnum"];
	/** Mirror poll choice */
["MirrorPollChoice"]: {
		id?:number,
	title?:string,
	description?:string,
	responses?:(ModelTypes["MirrorPollResponse"] | undefined)[]
};
	/** Mirror poll response */
["MirrorPollResponse"]: {
		address?:string,
	twitter?:ModelTypes["TwitterProfileType"]
};
	/** User data for a mirror poll */
["MirrorPollUser"]: {
		hasPermission?:boolean,
	existingVote?:number
};
	/** Dutch Auction */
["DutchAuctionType"]: {
		_id?:string,
	events?:(ModelTypes["DutchAuctionEventType"] | undefined)[],
	status?:ModelTypes["DutchAuctionStatusType"],
	operator?:ModelTypes["UserProfileType"],
	publication?:ModelTypes["publication"],
	address?:string,
	transactionHash?:string,
	version?:string,
	fundsRecipientAddress?:string,
	name?:string,
	subheading?:string,
	description?:string,
	tokenIds?:(number | undefined)[],
	prices?:(number | undefined)[],
	totalSupply?:number,
	collected?:number,
	currentPrice?:number,
	timeRemaining?:string,
	nextBlock?:string,
	edition?:ModelTypes["edition"],
	isPaused?:boolean,
	collectors?:(ModelTypes["CollectorType"] | undefined)[],
	totalRaised?:number,
	hasStarted?:boolean,
	network?:string,
	publisher?:ModelTypes["PublisherType"]
};
	/** Dutch Auction Event */
["DutchAuctionEventType"]: {
		blockNumber?:number,
	logIndex?:number,
	network?:string,
	transactionHash?:string,
	event?:string,
	tokenId?:string,
	recipient?:string,
	amount?:string,
	fee?:string,
	price?:string,
	account?:string,
	priceFormatted?:string,
	amountFormatted?:string,
	feeFormatted?:string
};
	["DutchAuctionStatusType"]: GraphQLTypes["DutchAuctionStatusType"];
	/** Dutch Auction Collectors */
["CollectorType"]: {
		address?:string,
	user?:ModelTypes["UserProfileType"],
	price?:number
};
	/** EditionOpenSale type */
["editionOpenSale"]: {
		id?:number,
	token?:string,
	operator?:string,
	recipient?:string,
	symbol?:string,
	startTokenId?:string,
	endTokenId?:string,
	price?:string,
	userProfile?:ModelTypes["UserProfileType"],
	publication?:ModelTypes["publication"],
	contract?:ModelTypes["Contract"],
	h?:string,
	network?:string,
	transactionHash?:string,
	contributionLimit?:string,
	version?:string,
	createdAt?:string,
	open?:boolean,
	status?:string,
	publisher?:ModelTypes["PublisherType"],
	purchases?:(ModelTypes["editionOpenSalePurchase"] | undefined)[]
};
	/** EditionOpenSalePurchase Type */
["editionOpenSalePurchase"]: {
		tokenId?:number,
	buyer?:string,
	recipient?:string,
	twitterUsername?:string,
	avatarURL?:string,
	transactionHash?:string
};
	/** CrowdfundTokenApprovalMetadata type */
["crowdfundTokenApprovalMetadata"]: {
		id?:number,
	status?:string,
	tokenAddress?:string,
	crowdfundAddress?:string,
	numberOfTokensToApprove?:string,
	tokenOwnerAddress?:string,
	transactionHash?:string
};
	["PluginType"]: {
		_id?:number,
	key?:string,
	name?:string,
	description?:string,
	category?:string,
	imageURL?:string,
	installed?:boolean
};
	/** API Mutations [Create, Update, Delete] */
["mutations"]: {
		/** Endpoint for onboarding a contributor */
	registerContributor?:ModelTypes["contributor"],
	/** Endpoint for onboarding a contributor */
	registerContributorForPublication?:ModelTypes["contributor"],
	/** Endpoint for updating contributor settings */
	updateContributorSettings?:ModelTypes["contributor"],
	/** Endpoint for removing a contributor from a publication */
	removeContributor?:ModelTypes["success"],
	/** Endpoint for updating an entry's status */
	changeEntryStatus?:boolean,
	/** Endpoint for creating a new entry */
	createEntry?:ModelTypes["entry"],
	/** Endpoint for onboarding a contributor */
	addSigningKey?:ModelTypes["signingKey"],
	/** Endpoint for onboarding a non-member */
	addNonMemberSigningKey?:ModelTypes["signingKey"],
	/** Endpoint for testing signing keys */
	_testSigning?:boolean,
	/** Endpoint for updating an entry */
	updateEntry?:ModelTypes["entry"],
	/** Endpoint for updating settings */
	updateSettings?:boolean,
	/** Endpoint for updating publication settings */
	updatePublicationSettings?:ModelTypes["publicationSettings"],
	verifyTweet?:boolean,
	verifyTweetV2?:boolean,
	removeTwitter?:boolean,
	/** Save a registration event, get user number back */
	saveRegistrationEvent?:ModelTypes["registrationEvent"],
	verifyVote?:boolean,
	/** Endpoint for creating a new crowdfund */
	createCrowdfund?:ModelTypes["crowdfund"],
	/** Endpoint for setting transaction hash on a crowdfund */
	setCrowdfundTransactionHash?:boolean,
	/** Endpoint for update crowdfund */
	updateCrowdfund?:ModelTypes["crowdfund"],
	/** Endpoint to update crowdfund publish status */
	updateCrowdfundPublishStatus?:ModelTypes["crowdfund"],
	/** Endpoint for creating a new NFT */
	createNFT?:ModelTypes["nft"],
	/** Endpoint for creating a new reserve auction */
	createReserveAuction?:ModelTypes["reserveAuction"],
	/** Endpoint for creating a new prompt response */
	createPromptResponse?:ModelTypes["promptResponse"],
	/** Endpoint for creating a split */
	createSplit?:ModelTypes["SplitType"],
	/** Endpoint for creating split allocations */
	createSplitAllocations?:boolean,
	/** Endpoint for creating a new crowdfund */
	createEdition?:ModelTypes["edition"],
	/** Endpoint for creating crowdfund editions */
	createCrowdfundEditions?:(ModelTypes["edition"] | undefined)[],
	/** Endpoint for creating entry editions */
	createEntryEditions?:(ModelTypes["edition"] | undefined)[],
	/** Endpoint for setting edition(s) transactionHash */
	setEditionTransactionHash?:boolean,
	/** Endpoint for setting edition(s) transactionHash */
	setEditionTransactionHashWithUserProfile?:boolean,
	/** Endpoint for setting up a new media asset */
	createMediaAsset?:ModelTypes["MediaAssetType"],
	/** Endpoint for adding a user email */
	addEmail?:ModelTypes["email"],
	/** Endpoint for verifying a user's email */
	verifyEmail?:ModelTypes["email"],
	/** Endpoint for updating write race notification settings */
	setWriteRaceNotification?:boolean,
	/** Endpoint for creating a user profile */
	createUserProfile?:ModelTypes["UserProfileType"],
	/** Endpoint for updating a user profile */
	updateUserProfile?:ModelTypes["UserProfileType"],
	/** Endpoint for updating a user profile theme */
	updateUserProfileTheme?:ModelTypes["UserProfileThemeType"],
	/** Endpoint for relinking ens */
	relinkEns?:ModelTypes["ENS"],
	/** Endpoint for setting a user profile header image */
	setUserProfileHeaderImage?:ModelTypes["MediaAssetType"],
	/** Endpoint for adding a survey response */
	addSurveyResponse?:boolean,
	/** Endpoint for creating a crowdfund draft */
	createCrowdfundDraft?:ModelTypes["CrowdfundDraft"],
	/** Endpoint for editing a crowdfund draft */
	editCrowdfundDraft?:ModelTypes["CrowdfundDraft"],
	/** Endpoint for deleting a crowdfund draft */
	deleteCrowdfundDraft?:boolean,
	/** Endpoint for creating or updating a crowdfund draft */
	createOrUpdateCrowdfundDraft?:ModelTypes["CrowdfundDraft"],
	/** Endpoint for setting the crowdfund ID for a crowdfund draft */
	setCrowdfundIdForCrowdfundDraft?:boolean,
	/** Endpoint for creating a new proposal */
	createProposal?:ModelTypes["Proposal"],
	/** Endpoint for canceling a new proposal */
	cancelProposal?:boolean,
	/** Endpoint for canceling a new proposal */
	voteOnProposal?:ModelTypes["ProposalUserVotingPower"],
	/** Endpoint for adding a multisig to a user */
	addMultisig?:boolean,
	mirrorPollResponse?:boolean,
	/** Endpoint for creating a new Mirror ERC20 token */
	createMirrorERC20Token?:ModelTypes["mirrorERC20Token"],
	/** Endpoint for setting transaction hash on a Mirror ERC20 token */
	setMirrorERC20TokenTransactionHash?:boolean,
	/** Endpoint for creating a new crowdfund */
	createEditionsOpenSale?:ModelTypes["editionOpenSale"],
	/** Endpoint for creating a new Mirror ERC20 token approval */
	createCrowdfundTokenApproval?:boolean,
	/** Endpoint for setting transaction hash on a Mirror ERC20 token */
	setTransactionHashForCrowdfundTokenApproval?:boolean,
	/** Endpoint for creating a dutch auction */
	createDutchAuction?:ModelTypes["DutchAuctionType"],
	setDutchAuctionTransactionHash?:boolean,
	/** Endpoint for inviting a project contributor */
	inviteProjectContributor?:ModelTypes["ProjectType"],
	/** Endpoint for accepting a project contributor invite */
	acceptProjectContributorInvite?:ModelTypes["ProjectType"],
	/** Endpoint for revoking a project contributor */
	revokeProjectContributor?:ModelTypes["ProjectType"],
	/** Endpoint for updating a project */
	updateProject?:ModelTypes["ProjectType"],
	/** Endpoint for setting a project header image */
	setProjectHeaderImage?:ModelTypes["MediaAssetType"],
	/** Endpoint for updating a user profile theme */
	updateProjectTheme?:ModelTypes["ProjectThemeType"],
	/** Endpoint for updating a plugin's installation status for a project */
	updatePluginStatus?:ModelTypes["PluginType"]
};
	/** Success type */
["success"]: {
		success?:boolean
};
	/** Edition For Signature type */
["EditionForSignatureType"]: GraphQLTypes["EditionForSignatureType"];
	/** description */
["SplitAllocationInputType"]: GraphQLTypes["SplitAllocationInputType"];
	/** Edition Input type */
["EditionInputType"]: GraphQLTypes["EditionInputType"];
	/** description */
["EditionAttributeInputType"]: GraphQLTypes["EditionAttributeInputType"];
	/** description */
["MediaAssetSizesInputType"]: GraphQLTypes["MediaAssetSizesInputType"];
	/** description */
["MediaAssetSizeInputType"]: GraphQLTypes["MediaAssetSizeInputType"];
	/** Proposal entry input (single) */
["ProposalEntryInput"]: GraphQLTypes["ProposalEntryInput"];
	/** Project Theme */
["ProjectThemeType"]: {
		colorMode?:ModelTypes["ColorModeType"],
	accent?:ModelTypes["AccentType"]
}
    }

export type GraphQLTypes = {
    /** Publication type */
["publication"]: {
	__typename: "publication",
	id?: number,
	ensLabel?: string,
	displayName?: string,
	avatarURL?: string,
	entries?: Array<GraphQLTypes["entry"] | undefined>,
	crowdfundEntries?: Array<GraphQLTypes["crowdfund"] | undefined>,
	posts?: Array<GraphQLTypes["PostType"] | undefined>,
	publicationSettings?: GraphQLTypes["publicationSettings"],
	contributors?: Array<GraphQLTypes["contributor"] | undefined>,
	nft?: GraphQLTypes["nft"]
};
	/** Crowdfund type */
["crowdfund"]: {
	__typename: "crowdfund",
	_id?: string,
	id?: number,
	crowdfundDraftId?: number,
	name?: string,
	symbol?: string,
	title?: string,
	contributorAddress?: string,
	description?: string,
	content?: string,
	publication?: GraphQLTypes["publication"],
	operator?: GraphQLTypes["UserProfileType"],
	address?: string,
	fundingRecipient?: string,
	goal?: string,
	stretchGoal?: string,
	network?: string,
	transactionHash?: string,
	contributionLimit?: string,
	endsAt?: number,
	version?: string,
	editions?: Array<GraphQLTypes["edition"] | undefined>,
	metadata?: GraphQLTypes["CrowdfundMetadataType"],
	publishStatus?: string,
	createdAt?: string,
	blockState?: GraphQLTypes["BlockStateType"],
	exchangeRate?: string,
	token?: GraphQLTypes["mirrorERC20Token"],
	publisher?: GraphQLTypes["PublisherType"]
};
	["UserProfileType"]: {
	__typename: "UserProfileType",
	address?: string,
	displayName?: string,
	avatarURL?: string,
	contributor?: GraphQLTypes["contributor"],
	nfts?: Array<GraphQLTypes["NFTType"] | undefined>,
	editions?: GraphQLTypes["EditionsType"],
	notificationSettings?: GraphQLTypes["NotificationSettingsType"],
	theme?: GraphQLTypes["UserProfileThemeType"],
	ens?: string,
	headerImage?: GraphQLTypes["MediaAssetType"],
	description?: string,
	gaTrackingID?: string,
	mailingListURL?: string,
	domain?: string,
	memberships?: Array<GraphQLTypes["ProjectType"] | undefined>,
	members?: Array<GraphQLTypes["ProjectType"] | undefined>
};
	/** Contributor type */
["contributor"]: {
	__typename: "contributor",
	address?: string,
	id?: string,
	displayName?: string,
	avatarURL?: string,
	publications?: Array<GraphQLTypes["publication"] | undefined>,
	signingKeys?: Array<GraphQLTypes["signingKey"] | undefined>
};
	/** Returns information about a signing key */
["signingKey"]: {
	__typename: "signingKey",
	id?: number,
	publicKey?: string,
	signature?: GraphQLTypes["signingKeySignature"]
};
	/** Display the signature proving ownership of a signing key */
["signingKeySignature"]: {
	__typename: "signingKeySignature",
	id?: number,
	signingKeyId?: number,
	signature?: string,
	message?: string
};
	["NFTType"]: {
	__typename: "NFTType",
	contract?: GraphQLTypes["NFTContractType"],
	name?: string,
	tokenId?: string,
	imageURL?: string,
	imagePreviewUrl?: string,
	imageThumbnailUrl?: string,
	imageOriginalUrl?: string,
	animationUrl?: string,
	animationOriginalUrl?: string
};
	["NFTContractType"]: {
	__typename: "NFTContractType",
	address?: string,
	name?: string,
	symbol?: string
};
	["EditionsType"]: {
	__typename: "EditionsType",
	purchased?: Array<GraphQLTypes["EditionPurchasedType"] | undefined>
};
	["EditionPurchasedType"]: {
	__typename: "EditionPurchasedType",
	blockNumber?: number,
	transactionHash?: string,
	logIndex?: number,
	event?: string,
	editionId?: string,
	tokenId?: string,
	numSold?: string,
	serial?: string,
	amountPaid?: string,
	buyer?: string,
	edition?: GraphQLTypes["edition"]
};
	/** Edition type */
["edition"]: {
	__typename: "edition",
	_id?: string,
	id?: number,
	title?: string,
	quantity?: number,
	description?: string,
	price?: number,
	allocation?: number,
	editionId?: number,
	entryId?: number,
	contentHash?: string,
	fundingRecipient?: string,
	transactionHash?: string,
	editionContractAddress?: string,
	version?: string,
	singleArtifact?: boolean,
	attributes?: Array<GraphQLTypes["EditionAttribute"] | undefined>,
	crowdfund?: GraphQLTypes["crowdfund"],
	primaryMedia?: GraphQLTypes["MediaAssetType"],
	thumbnailMedia?: GraphQLTypes["MediaAssetType"],
	mediaURL?: string,
	artifacts?: Array<GraphQLTypes["editionArtifact"] | undefined>,
	operator?: GraphQLTypes["UserProfileType"],
	creator?: GraphQLTypes["contributor"],
	publication?: GraphQLTypes["publication"],
	entry?: GraphQLTypes["entry"],
	events?: Array<GraphQLTypes["EditionEventsType"] | undefined>,
	tokenIds?: Array<string | undefined>,
	publisher?: GraphQLTypes["PublisherType"],
	blockState?: GraphQLTypes["BlockStateType"]
};
	/** Edition Attribute type */
["EditionAttribute"]: {
	__typename: "EditionAttribute",
	trait_type?: string,
	display_type?: string,
	value?: string
};
	/** description */
["MediaAssetType"]: {
	__typename: "MediaAssetType",
	id?: number,
	mimetype?: string,
	sizes?: GraphQLTypes["MediaAssetSizesType"],
	url?: string
};
	/** description */
["MediaAssetSizesType"]: {
	__typename: "MediaAssetSizesType",
	og?: GraphQLTypes["MediaAssetSizeType"],
	lg?: GraphQLTypes["MediaAssetSizeType"],
	md?: GraphQLTypes["MediaAssetSizeType"],
	sm?: GraphQLTypes["MediaAssetSizeType"]
};
	/** description */
["MediaAssetSizeType"]: {
	__typename: "MediaAssetSizeType",
	height?: number,
	width?: number,
	src?: string
};
	/** Edition Artifact type */
["editionArtifact"]: {
	__typename: "editionArtifact",
	tokenId?: number,
	editionId?: number,
	url?: string
};
	/** Events for an edition with contract address and ID */
["EditionEventsType"]: {
	__typename: "EditionEventsType",
	event?: string,
	blockNumber?: number,
	logIndex?: number,
	transactionHash?: string,
	network?: string,
	quantity?: string,
	price?: string,
	fundingRecipient?: string,
	editionId?: string,
	tokenId?: string,
	numSold?: string,
	buyer?: string,
	feePercent?: string,
	sender?: string,
	newFee?: string,
	feesAccrued?: string,
	previousOwner?: string,
	newOwner?: string,
	amountWithdrawn?: string,
	feeAmount?: string,
	amountPaid?: string,
	contentHash?: string,
	receiver?: string,
	previousCreator?: string,
	newCreator?: string,
	from?: string,
	to?: string,
	owner?: string,
	approved?: string,
	operator?: string,
	avatarURL?: string,
	twitterUsername?: string,
	collectorAddress?: string,
	serialNumber?: string
};
	/** The publisher of the block */
["PublisherType"]: {
	__typename: "PublisherType",
	/** The project that published the block */
	project?: GraphQLTypes["ProjectType"],
	/** The member that published on behalf of the project */
	member?: GraphQLTypes["ProjectType"]
};
	["ProjectType"]: {
	__typename: "ProjectType",
	_id?: string,
	address?: string,
	displayName?: string,
	avatarURL?: string,
	notificationSettings?: GraphQLTypes["NotificationSettingsType"],
	theme?: GraphQLTypes["UserProfileThemeType"],
	ens?: string,
	headerImage?: GraphQLTypes["MediaAssetType"],
	description?: string,
	gaTrackingID?: string,
	mailingListURL?: string,
	domain?: string,
	memberships?: Array<GraphQLTypes["ProjectType"] | undefined>,
	members?: Array<GraphQLTypes["ProjectType"] | undefined>,
	pendingMemberships?: Array<GraphQLTypes["ProjectType"] | undefined>,
	pendingMembers?: Array<GraphQLTypes["ProjectType"] | undefined>,
	posts?: Array<GraphQLTypes["PostType"] | undefined>,
	featureFlags?: GraphQLTypes["FeatureFlagStatusType"],
	navigation?: GraphQLTypes["NavigationType"]
};
	["NotificationSettingsType"]: {
	__typename: "NotificationSettingsType",
	writeRace?: boolean
};
	/** User Profile Theme */
["UserProfileThemeType"]: {
	__typename: "UserProfileThemeType",
	colorMode?: GraphQLTypes["ColorModeType"],
	accent?: GraphQLTypes["AccentType"]
};
	["ColorModeType"]: ColorModeType;
	["AccentType"]: AccentType;
	["PostType"]:{
	__typename:"entry" | "crowdfund"
	['...on entry']: '__union' & GraphQLTypes["entry"];
	['...on crowdfund']: '__union' & GraphQLTypes["crowdfund"];
};
	["FeatureFlagStatusType"]: {
	__typename: "FeatureFlagStatusType",
	isPluginsTabEnabled?: boolean
};
	["NavigationType"]: {
	__typename: "NavigationType",
	section?: GraphQLTypes["NavigationSectionType"],
	content?: GraphQLTypes["NavigationContentType"]
};
	["NavigationSectionType"]: {
	__typename: "NavigationSectionType",
	isFundingEnabled?: boolean,
	isNFTsEnabled?: boolean,
	isGovernanceEnabled?: boolean
};
	["NavigationContentType"]: {
	__typename: "NavigationContentType",
	isCrowdfundsEnabled?: boolean,
	isSplitsEnabled?: boolean,
	isTokensEnabled?: boolean,
	isEditionsEnabled?: boolean,
	isTokenRaceEnabled?: boolean,
	isAuctionsEnabled?: boolean
};
	/** Provides information about the state of the block */
["BlockStateType"]: {
	__typename: "BlockStateType",
	/** Status of the block */
	status?: GraphQLTypes["BlockStatusEnum"]
};
	["BlockStatusEnum"]: BlockStatusEnum;
	/** CrowdfundMetadata Type */
["CrowdfundMetadataType"]: {
	__typename: "CrowdfundMetadataType",
	coverImage?: GraphQLTypes["MediaAssetType"],
	podium?: GraphQLTypes["PodiumType"]
};
	/** Podium Type */
["PodiumType"]: {
	__typename: "PodiumType",
	first?: GraphQLTypes["PodiumFieldType"],
	second?: GraphQLTypes["PodiumFieldType"],
	third?: GraphQLTypes["PodiumFieldType"],
	duration?: number
};
	/** PodiumField Type */
["PodiumFieldType"]: {
	__typename: "PodiumFieldType",
	title?: string,
	description?: string,
	primaryMedia?: GraphQLTypes["MediaAssetType"],
	thumbnailMedia?: GraphQLTypes["MediaAssetType"]
};
	/** MirrorERC20Token type */
["mirrorERC20Token"]: {
	__typename: "mirrorERC20Token",
	id?: number,
	name?: string,
	symbol?: string,
	numDecimals?: string,
	totalSupply?: string,
	totalSupplyFormatted?: string,
	operator?: GraphQLTypes["UserProfileType"],
	description?: string,
	publication?: GraphQLTypes["publication"],
	tokenAddress?: string,
	iconMedia?: GraphQLTypes["MediaAssetType"],
	network?: string,
	transactionHash?: string,
	contributionLimit?: string,
	ownerAddress?: string,
	version?: string,
	createdAt?: string,
	publisher?: GraphQLTypes["PublisherType"]
};
	/** Publication Settings type */
["publicationSettings"]: {
	__typename: "publicationSettings",
	publicationLabel?: string,
	settings?: string,
	digest?: string,
	contributorAddress?: string,
	key?: string,
	signature?: string,
	timestamp?: number
};
	/** NFT type */
["nft"]: {
	__typename: "nft",
	id?: number,
	name?: string,
	tokenURI?: string,
	contributorAddress?: string,
	address?: string,
	contentHash?: string,
	network?: string,
	tokenId?: number,
	transactionHash?: string,
	entryDigest?: string
};
	/** Entry type */
["entry"]: {
	__typename: "entry",
	_id?: string,
	id?: number,
	entryId?: number,
	digest?: string,
	originalDigest?: string,
	title?: string,
	hideTitleInEntry?: boolean,
	body?: string,
	timestamp?: number,
	publishedAtTimestamp?: number,
	publishStatus?: string,
	canonicalUrl?: string,
	publicationId?: number,
	userProfileId?: number,
	featuredImageId?: number,
	arweaveTransactionRequest?: GraphQLTypes["ArweaveTransactionRequestType"],
	/** Transaction hash that includes NFT event */
	nftTransactionHash?: string,
	/** address of the token that has the NFT */
	nftAddress?: number,
	/** Optional token id of the NFT */
	nftTokenId?: number,
	publication?: GraphQLTypes["publication"],
	userProfile?: GraphQLTypes["UserProfileType"],
	contributor?: GraphQLTypes["contributor"],
	author?: GraphQLTypes["UserProfileType"],
	nft?: GraphQLTypes["nft"],
	authorship?: GraphQLTypes["Authorship"],
	contributors?: Array<GraphQLTypes["contributor"] | undefined>,
	editions?: Array<GraphQLTypes["edition"] | undefined>,
	featuredImage?: GraphQLTypes["MediaAssetType"],
	publisher?: GraphQLTypes["PublisherType"],
	collaborators?: Array<GraphQLTypes["ProjectType"] | undefined>
};
	/** Describes an Arweave Transaction Request */
["ArweaveTransactionRequestType"]: {
	__typename: "ArweaveTransactionRequestType",
	id?: number,
	transactionId?: string,
	entryId?: number
};
	/** Contains verification of authorship */
["Authorship"]: {
	__typename: "Authorship",
	publicKey?: string,
	signature?: string
};
	/** API Queries [Read] */
["query"]: {
	__typename: "query",
	publication?: GraphQLTypes["publication"],
	publicationFeed?: GraphQLTypes["publication"],
	publicationContributors?: Array<GraphQLTypes["contributor"] | undefined>,
	publications?: Array<GraphQLTypes["publication"] | undefined>,
	/** Endpoint for querying a contributor's information */
	contributor?: GraphQLTypes["contributor"],
	/** Endpoint for querying a contributor's information */
	contributorsByAddress?: Array<GraphQLTypes["contributor"] | undefined>,
	nextContributorId?: number,
	/** Endpoint for querying an Entry by digest */
	entry?: GraphQLTypes["entry"],
	/** All the entries for a user address */
	entries?: Array<GraphQLTypes["entry"] | undefined>,
	/** Endpoint for returning ENS information for a given domain */
	resolveENS?: GraphQLTypes["ENS"],
	/** Endpoint for returning ENS information for a given address */
	lookupENS?: GraphQLTypes["ENS"],
	/** Endpoint for querying a contributor's profile information */
	addressInfo?: GraphQLTypes["addressInfo"],
	/** Endpoint for querying for settings for a publication */
	publicationSettings?: GraphQLTypes["publicationSettings"],
	verifiedAccounts?: Array<GraphQLTypes["VerifiedAccount"] | undefined>,
	verifiedAccount?: GraphQLTypes["VerifiedAccount"],
	/** Endpoint for getting whether a user is verified */
	isVerified?: boolean,
	verifiedAccountsAfterTimestamp?: Array<GraphQLTypes["VerifiedAccount"] | undefined>,
	registrationEvent?: GraphQLTypes["registrationEvent"],
	registrationEvents?: Array<GraphQLTypes["registrationEvent"] | undefined>,
	registeredProfiles?: Array<GraphQLTypes["RegisteredProfile"] | undefined>,
	verifiedVotes?: Array<GraphQLTypes["VerifiedVoteType"] | undefined>,
	votingPower?: GraphQLTypes["VotingPowerType"],
	verifiedVotesByRound?: Array<GraphQLTypes["VerifiedVoteType"] | undefined>,
	/** Endpoint for querying a user's crowdfunds */
	crowdfunds?: Array<GraphQLTypes["CrowdfundListType"] | undefined>,
	/** Get dropped crowdfunds */
	droppedCrowdfunds?: Array<GraphQLTypes["crowdfund"] | undefined>,
	/** Endpoint for querying a crowdfund at an address */
	crowdfundAtAddress?: GraphQLTypes["crowdfund"],
	/** Endpoint for querying a crowdfund at an address */
	crowdfundBlockData?: GraphQLTypes["CrowdfundBlock"],
	/** Endpoint for querying a user's crowdfund entries */
	crowdfundEntries?: Array<GraphQLTypes["crowdfund"] | undefined>,
	/** Endpoint for querying a contributor's NFTs */
	nfts?: Array<GraphQLTypes["nft"] | undefined>,
	/** Endpoint for querying a single NFT */
	nft?: GraphQLTypes["nft"],
	/** Endpoint for querying a project reserveAuctions */
	reserveAuctions?: Array<GraphQLTypes["reserveAuction"] | undefined>,
	/** Endpoint for querying a reserve auction by tokenId at an address */
	reserveAuction?: GraphQLTypes["reserveAuction"],
	socialProfiles?: Array<GraphQLTypes["SocialProfileType"] | undefined>,
	socialProfile?: GraphQLTypes["SocialProfileType"],
	writeRaceProfiles?: Array<GraphQLTypes["WriteRaceProfileType"] | undefined>,
	leaderboard?: Array<GraphQLTypes["LeaderboardType"] | undefined>,
	twitterProfile?: GraphQLTypes["TwitterProfileType"],
	twitterProfilesById?: Array<GraphQLTypes["TwitterProfileType"] | undefined>,
	splits?: Array<GraphQLTypes["SplitType"] | undefined>,
	split?: GraphQLTypes["SplitType"],
	unverifiedTwitterProfiles?: Array<GraphQLTypes["UnverifiedTwitterProfileType"] | undefined>,
	/** Endpoint for querying a contributor's editions for a publication */
	editions?: Array<GraphQLTypes["edition"] | undefined>,
	edition?: GraphQLTypes["edition"],
	/** Endpoint for querying a user's activity feed */
	userActivityFeed?: Array<GraphQLTypes["ActivityPropertiesType"] | undefined>,
	/** Endpoint for querying a user's email verification status */
	email?: GraphQLTypes["email"],
	/** Endpoint for querying a crowdfund's event data */
	crowdfundEvents?: Array<GraphQLTypes["crowdfundEvents"] | undefined>,
	userProfile?: GraphQLTypes["UserProfileType"],
	me?: GraphQLTypes["ProjectType"],
	verifyPublicKey?: GraphQLTypes["PublicKeyVerification"],
	address?: string,
	mirrorProject?: GraphQLTypes["MirrorProjectType"],
	projectThemeOptions?: GraphQLTypes["ProjectThemeOptionsType"],
	/** Endpoint for querying a whether a user has responded to a survey */
	hasUserSubmittedSurvey?: boolean,
	getSurvey?: GraphQLTypes["SurveyType"],
	/** Endpoint for querying a contributor's crowdfund drafts */
	crowdfundDraftById?: GraphQLTypes["CrowdfundDraft"],
	/** Endpoint for querying all contracts */
	contracts?: Array<GraphQLTypes["Contract"] | undefined>,
	/** Endpoint for querying proposals made by user */
	proposals?: Array<GraphQLTypes["Proposal"] | undefined>,
	/** Endpoint for querying a single proposal */
	proposal?: GraphQLTypes["Proposal"],
	/** Endpoint for querying voting data for user */
	proposalVotingPower?: GraphQLTypes["ProposalUserVotingPower"],
	/** Endpoint for querying vote data for an entry */
	proposalEntryVotes?: Array<GraphQLTypes["ProposalEntryVote"] | undefined>,
	writeRaceSearch?: Array<GraphQLTypes["WriteRaceRoundDataType"] | undefined>,
	writeRaceVotingPower?: GraphQLTypes["WriteRaceVotingPowerType"],
	writeRaceCurrentUser?: GraphQLTypes["WriteRaceCurrentUser"],
	writeRaceCurrentRound?: GraphQLTypes["WriteRaceCurrentRound"],
	writeRaceLeaderboard?: GraphQLTypes["WriteRaceLeaderboardType"],
	writeRaceGenesisWriters?: Array<GraphQLTypes["WriteRaceLeaderboardWinnerType"] | undefined>,
	mirrorPoll?: GraphQLTypes["MirrorPollType"],
	mirrorPollCanRespond?: boolean,
	mirrorPollUser?: GraphQLTypes["MirrorPollUser"],
	/** Endpoint for querying a dutch auction */
	dutchAuction?: GraphQLTypes["DutchAuctionType"],
	editionOpenSale?: GraphQLTypes["editionOpenSale"],
	/** Endpoint for querying a user's tokens created on Mirror */
	mirrorERC20Tokens?: Array<GraphQLTypes["mirrorERC20Token"] | undefined>,
	/** Endpoint for querying a token at an address */
	mirrorERC20TokenAtAddress?: GraphQLTypes["mirrorERC20Token"],
	/** Endpoint for querying a user's tokens created on Mirror */
	crowdfundTokenApprovalMetadata?: GraphQLTypes["crowdfundTokenApprovalMetadata"],
	/** Endpoint for querying a project feed by ens name, domain, or address */
	projectFeed?: GraphQLTypes["ProjectType"],
	/** Endpoint for querying all plugins for a project */
	plugins?: Array<GraphQLTypes["PluginType"] | undefined>,
	/** List of all available plugins */
	pluginsList?: Array<GraphQLTypes["PluginType"] | undefined>
};
	/** ENS type */
["ENS"]: {
	__typename: "ENS",
	name?: string,
	address?: string
};
	/** Provides some basic information about an Etheruem address */
["addressInfo"]: {
	__typename: "addressInfo",
	ens?: string,
	writeTokens?: string,
	hasOnboarded?: boolean
};
	["VerifiedAccount"]: {
	__typename: "VerifiedAccount",
	twitterProfileId?: number,
	account?: string,
	username?: string,
	signature?: string,
	name?: string,
	twitterId?: string,
	avatarURL?: string,
	followerCount?: number,
	promptResponse?: GraphQLTypes["promptResponse"]
};
	/** PromptResponse type */
["promptResponse"]: {
	__typename: "promptResponse",
	id?: number,
	content?: string,
	createdAt?: string
};
	/** RegistrationEvent type */
["registrationEvent"]: {
	__typename: "registrationEvent",
	id?: number,
	account?: string,
	ensLabel?: string,
	transactionHash?: string
};
	["RegisteredProfile"]: {
	__typename: "RegisteredProfile",
	id?: number,
	account?: string,
	username?: string,
	avatarURL?: string
};
	["VerifiedVoteType"]: {
	__typename: "VerifiedVoteType",
	account?: string,
	candidate?: string,
	round?: string,
	signature?: string,
	amount?: number,
	createdAt?: number
};
	["VotingPowerType"]: {
	__typename: "VotingPowerType",
	account?: string,
	votingPower?: number,
	round?: string,
	reasons?: string
};
	["CrowdfundListType"]:{
	__typename:"CrowdfundDraft" | "crowdfund"
	['...on CrowdfundDraft']: '__union' & GraphQLTypes["CrowdfundDraft"];
	['...on crowdfund']: '__union' & GraphQLTypes["crowdfund"];
};
	/** CrowdfundDraft type */
["CrowdfundDraft"]: {
	__typename: "CrowdfundDraft",
	_id?: string,
	id?: number,
	data?: string,
	name?: string,
	symbol?: string,
	title?: string,
	crowdfundDraftId?: number,
	publisher?: GraphQLTypes["PublisherType"]
};
	/** CrowdfundBlock type */
["CrowdfundBlock"]: {
	__typename: "CrowdfundBlock",
	name?: string,
	symbol?: string,
	contractAddress?: string,
	valueCurrent?: string,
	stretchGoal?: number,
	fundingCap?: number,
	tokensIssued?: string,
	isRedeemable?: boolean,
	isActive?: boolean,
	operatorEquityPercent?: string,
	contributionLimit?: string,
	fundingRecipientAddress?: string,
	operator?: GraphQLTypes["UserProfileType"],
	backers?: Array<GraphQLTypes["CrowdfundBacker"] | undefined>,
	events?: Array<GraphQLTypes["CrowdfundEvent"] | undefined>,
	podiumDuration?: number,
	podiumStartTime?: number,
	minPodiumBid?: string,
	accountBalance?: string,
	totalSupply?: string,
	status?: string
};
	/** CrowdfundBacker Type */
["CrowdfundBacker"]: {
	__typename: "CrowdfundBacker",
	eth?: string,
	tokens?: string,
	address?: string,
	blockNumber?: number,
	avatarURL?: string,
	twitterUsername?: string,
	percentage?: string
};
	/** CrowdfundEvent Type */
["CrowdfundEvent"]: {
	__typename: "CrowdfundEvent",
	id?: number,
	event?: string,
	amount?: string,
	amountRaised?: string,
	amountFormatted?: number,
	amountRaisedFormatted?: string,
	creatorAllocation?: string,
	value?: string,
	address?: string,
	from?: string,
	to?: string,
	blockNumber?: number,
	logIndex?: number,
	network?: string,
	transactionHash?: string,
	editionId?: number,
	tokenId?: number,
	crowdfundId?: number,
	timestamp?: string
};
	/** ReserveAuction type */
["reserveAuction"]: {
	__typename: "reserveAuction",
	_id?: string,
	id?: number,
	tokenId?: number,
	duration?: number,
	address?: string,
	nftAddress?: string,
	auctionId?: string,
	creatorShareRecipientAddress?: string,
	creatorAddress?: string,
	fundsRecipientAddress?: string,
	deployerAddress?: string,
	curatorAddress?: string,
	curatorFee?: string,
	version?: string,
	reservePrice?: string,
	network?: string,
	transactionHash?: string,
	createdAt?: string,
	events?: Array<GraphQLTypes["ReserveAuctionEvent"] | undefined>,
	operator?: GraphQLTypes["UserProfileType"],
	deployer?: GraphQLTypes["contributor"],
	publication?: GraphQLTypes["publication"],
	publisher?: GraphQLTypes["PublisherType"]
};
	/** ReserveAuctionEvent type */
["ReserveAuctionEvent"]: {
	__typename: "ReserveAuctionEvent",
	event?: string,
	blockNumber?: number,
	logIndex?: number,
	transactionHash?: string,
	network?: string,
	nftContractAddress?: string,
	tokenId?: string,
	curator?: string,
	amount?: string,
	winner?: string,
	nftCreator?: string,
	fundsRecipient?: string,
	value?: string,
	sender?: string,
	duration?: string,
	reservePrice?: string,
	curatorFeePercent?: string,
	creator?: string,
	originalCreator?: string,
	zoraAddress?: string,
	creatorShareRecipient?: string,
	firstBid?: string,
	extended?: string,
	timestamp?: string,
	auctionId?: string
};
	["SocialProfileType"]: {
	__typename: "SocialProfileType",
	address?: string,
	twitter?: GraphQLTypes["TwitterProfileType"],
	mirror?: GraphQLTypes["MirrorProfileType"]
};
	["TwitterProfileType"]: {
	__typename: "TwitterProfileType",
	id?: number,
	username?: string,
	avatarURL?: string,
	twitterId?: string,
	followerCount?: number,
	name?: string
};
	["MirrorProfileType"]: {
	__typename: "MirrorProfileType",
	contributor?: GraphQLTypes["contributor"]
};
	["WriteRaceProfileType"]: {
	__typename: "WriteRaceProfileType",
	address?: string,
	twitter?: GraphQLTypes["TwitterProfileType"],
	mirror?: GraphQLTypes["MirrorProfileType"],
	promptResponse?: GraphQLTypes["promptResponse"]
};
	["LeaderboardType"]: {
	__typename: "LeaderboardType",
	title?: string,
	numVotes?: number,
	candidates?: number,
	profiles?: Array<GraphQLTypes["LeaderboardProfileType"] | undefined>
};
	["LeaderboardProfileType"]: {
	__typename: "LeaderboardProfileType",
	numVotes?: number,
	votingPower?: number,
	account?: string,
	username?: string,
	avatarURL?: string,
	followerCount?: number,
	backers?: Array<GraphQLTypes["LeaderboardBackerType"] | undefined>,
	ensDomain?: string,
	notHighlighted?: boolean
};
	["LeaderboardBackerType"]: {
	__typename: "LeaderboardBackerType",
	amount?: number,
	account?: string,
	username?: string,
	avatarURL?: string,
	followerCount?: number
};
	/** Returns information about a split */
["SplitType"]: {
	__typename: "SplitType",
	_id?: string,
	id?: number,
	name?: string,
	address?: string,
	transactionHash?: string,
	network?: string,
	splitAllocations?: Array<GraphQLTypes["SplitAllocationType"] | undefined>,
	events?: Array<GraphQLTypes["SplitEventType"] | undefined>,
	operator?: GraphQLTypes["UserProfileType"],
	publication?: GraphQLTypes["publication"],
	publisher?: GraphQLTypes["PublisherType"]
};
	/** Returns information about a split allocation */
["SplitAllocationType"]: {
	__typename: "SplitAllocationType",
	id?: number,
	address?: string,
	scaledPercent?: number,
	splitAmount?: number,
	account?: string,
	userProfile?: GraphQLTypes["UserProfileType"]
};
	/** Events for a split */
["SplitEventType"]: {
	__typename: "SplitEventType",
	event?: string,
	account?: string,
	amount?: string,
	amountFormatted?: string,
	asset?: string,
	blockNumber?: number,
	category?: string,
	currentWindow?: string,
	from?: string,
	fundsAvailable?: string,
	fundsAvailableFormatted?: string,
	logIndex?: number,
	network?: string,
	success?: string,
	to?: string,
	transactionHash?: string
};
	["UnverifiedTwitterProfileType"]: {
	__typename: "UnverifiedTwitterProfileType",
	id?: number,
	address?: string,
	twitterProfile?: GraphQLTypes["TwitterProfileType"]
};
	["ActivityPropertiesType"]: {
	__typename: "ActivityPropertiesType",
	key?: string,
	detailValue?: string
};
	/** Email type */
["email"]: {
	__typename: "email",
	verificationStatus?: GraphQLTypes["VerificationStatusEnum"]
};
	["VerificationStatusEnum"]: VerificationStatusEnum;
	/** Crowdfund Events type */
["crowdfundEvents"]: {
	__typename: "crowdfundEvents",
	event?: string,
	amount?: string,
	amountRaised?: string,
	amountFormatted?: number,
	amountRaisedFormatted?: number,
	creatorAllocation?: string,
	value?: string,
	address?: string,
	from?: string,
	to?: string,
	blockNumber?: number,
	logIndex?: number,
	network?: string,
	transactionHash?: string,
	tokenId?: string,
	editionId?: string
};
	["PublicKeyVerification"]: {
	__typename: "PublicKeyVerification",
	address?: string
};
	["MirrorProjectType"]: {
	__typename: "MirrorProjectType",
	isRegistered?: boolean,
	projectDetails?: GraphQLTypes["ProjectType"]
};
	/** Project Theme */
["ProjectThemeOptionsType"]: {
	__typename: "ProjectThemeOptionsType",
	colorModes?: Array<string | undefined>,
	accents?: Array<string | undefined>
};
	/** Type for a survey */
["SurveyType"]: {
	__typename: "SurveyType",
	prompt?: string,
	backers?: Array<string | undefined>,
	title?: string,
	description?: string
};
	/** Contract type */
["Contract"]: {
	__typename: "Contract",
	name?: string,
	abi?: string,
	address?: string,
	version?: string
};
	/** Proposal Type */
["Proposal"]: {
	__typename: "Proposal",
	_id?: string,
	cid?: string,
	erc20Address?: string,
	erc721Address?: string,
	startDate?: string,
	endDate?: string,
	tokenName?: string,
	tokenSymbol?: string,
	title?: string,
	description?: string,
	prompt?: string,
	tokenThreshold?: number,
	tokenIds?: Array<string | undefined>,
	highlightedWinners?: number,
	coverImage?: GraphQLTypes["MediaAssetType"],
	status?: string,
	snapshot?: GraphQLTypes["ProposalSnapshot"],
	results?: Array<GraphQLTypes["ProposalResult"] | undefined>,
	resultsCid?: string,
	entries?: Array<GraphQLTypes["ProposalEntry"] | undefined>,
	operator?: GraphQLTypes["UserProfileType"],
	publication?: GraphQLTypes["publication"],
	erc721Multiplier?: number,
	publisher?: GraphQLTypes["PublisherType"]
};
	/** Proposal Snapshot Type */
["ProposalSnapshot"]: {
	__typename: "ProposalSnapshot",
	cid?: string,
	blockNumber?: string
};
	/** Proposal Type */
["ProposalResult"]: {
	__typename: "ProposalResult",
	votes?: number,
	proposalEntryCid?: string,
	proposalCid?: string,
	body?: string,
	entryAuthorAddress?: string,
	isHighlighted?: boolean,
	position?: number
};
	/** Proposal Entry Type */
["ProposalEntry"]: {
	__typename: "ProposalEntry",
	address?: string,
	body?: string,
	cid?: string,
	proposalCid?: string,
	votes?: number,
	twitter?: GraphQLTypes["TwitterProfileType"]
};
	/** proposal voting power (user) */
["ProposalUserVotingPower"]: {
	__typename: "ProposalUserVotingPower",
	totalVotes?: number,
	availableVotes?: number,
	multisigs?: Array<GraphQLTypes["ProposalVotingPowerMultisig"] | undefined>
};
	/** proposal voting power (multisig) */
["ProposalVotingPowerMultisig"]: {
	__typename: "ProposalVotingPowerMultisig",
	totalVotes?: number,
	availableVotes?: number,
	address?: string
};
	/** Proposal entry vote data */
["ProposalEntryVote"]: {
	__typename: "ProposalEntryVote",
	votes?: number,
	address?: string,
	twitter?: GraphQLTypes["TwitterProfileType"]
};
	/** Write race round responses data */
["WriteRaceRoundDataType"]: {
	__typename: "WriteRaceRoundDataType",
	address?: string,
	votes?: number,
	voters?: Array<GraphQLTypes["WriteRaceVoterDataType"] | undefined>,
	twitter?: GraphQLTypes["TwitterProfileType"],
	response?: string,
	score?: number
};
	/** Write race voter data for prompt response */
["WriteRaceVoterDataType"]: {
	__typename: "WriteRaceVoterDataType",
	address?: string,
	twitter?: GraphQLTypes["TwitterProfileType"],
	votes?: number
};
	/** Voting Power */
["WriteRaceVotingPowerType"]: {
	__typename: "WriteRaceVotingPowerType",
	totalVotes?: number,
	availableVotes?: number
};
	/** Current User Details */
["WriteRaceCurrentUser"]: {
	__typename: "WriteRaceCurrentUser",
	address?: string,
	votes?: number,
	voters?: Array<GraphQLTypes["WriteRaceVoterDataType"] | undefined>,
	twitter?: GraphQLTypes["TwitterProfileType"],
	response?: string,
	isRegistered?: boolean,
	isWinner?: boolean,
	rank?: number
};
	/** Current round details */
["WriteRaceCurrentRound"]: {
	__typename: "WriteRaceCurrentRound",
	round?: number,
	status?: string,
	startsAt?: string,
	endsAt?: string,
	roundDetails?: GraphQLTypes["WriteRaceRoundType"],
	isQuadratic?: boolean,
	isPaused?: boolean
};
	/** Write race round data */
["WriteRaceRoundType"]: {
	__typename: "WriteRaceRoundType",
	roundData?: Array<GraphQLTypes["WriteRaceRoundDataType"] | undefined>,
	votesCast?: number,
	candidates?: number,
	currentPrompt?: string,
	roundNumber?: number,
	voters?: number
};
	["WriteRaceLeaderboardType"]: {
	__typename: "WriteRaceLeaderboardType",
	isQuadratic?: boolean,
	votes?: number,
	candidates?: number,
	winners?: Array<GraphQLTypes["WriteRaceLeaderboardWinnerType"] | undefined>,
	voters?: number
};
	/** Write Race Winner */
["WriteRaceLeaderboardWinnerType"]: {
	__typename: "WriteRaceLeaderboardWinnerType",
	voters?: Array<GraphQLTypes["WriteRaceVoterDataType"] | undefined>,
	address?: string,
	votes?: number,
	score?: number,
	votingPower?: number,
	twitter?: GraphQLTypes["TwitterProfileType"],
	ensLabel?: string
};
	/** mirror poll */
["MirrorPollType"]: {
	__typename: "MirrorPollType",
	_id?: string,
	id?: number,
	title?: string,
	description?: string,
	prompt?: string,
	status?: GraphQLTypes["MirrorPollStatusEnum"],
	endsAt?: string,
	startsAt?: string,
	coverImage?: GraphQLTypes["MediaAssetType"],
	choices?: Array<GraphQLTypes["MirrorPollChoice"] | undefined>
};
	["MirrorPollStatusEnum"]: MirrorPollStatusEnum;
	/** Mirror poll choice */
["MirrorPollChoice"]: {
	__typename: "MirrorPollChoice",
	id?: number,
	title?: string,
	description?: string,
	responses?: Array<GraphQLTypes["MirrorPollResponse"] | undefined>
};
	/** Mirror poll response */
["MirrorPollResponse"]: {
	__typename: "MirrorPollResponse",
	address?: string,
	twitter?: GraphQLTypes["TwitterProfileType"]
};
	/** User data for a mirror poll */
["MirrorPollUser"]: {
	__typename: "MirrorPollUser",
	hasPermission?: boolean,
	existingVote?: number
};
	/** Dutch Auction */
["DutchAuctionType"]: {
	__typename: "DutchAuctionType",
	_id?: string,
	events?: Array<GraphQLTypes["DutchAuctionEventType"] | undefined>,
	status?: GraphQLTypes["DutchAuctionStatusType"],
	operator?: GraphQLTypes["UserProfileType"],
	publication?: GraphQLTypes["publication"],
	address?: string,
	transactionHash?: string,
	version?: string,
	fundsRecipientAddress?: string,
	name?: string,
	subheading?: string,
	description?: string,
	tokenIds?: Array<number | undefined>,
	prices?: Array<number | undefined>,
	totalSupply?: number,
	collected?: number,
	currentPrice?: number,
	timeRemaining?: string,
	nextBlock?: string,
	edition?: GraphQLTypes["edition"],
	isPaused?: boolean,
	collectors?: Array<GraphQLTypes["CollectorType"] | undefined>,
	totalRaised?: number,
	hasStarted?: boolean,
	network?: string,
	publisher?: GraphQLTypes["PublisherType"]
};
	/** Dutch Auction Event */
["DutchAuctionEventType"]: {
	__typename: "DutchAuctionEventType",
	blockNumber?: number,
	logIndex?: number,
	network?: string,
	transactionHash?: string,
	event?: string,
	tokenId?: string,
	recipient?: string,
	amount?: string,
	fee?: string,
	price?: string,
	account?: string,
	priceFormatted?: string,
	amountFormatted?: string,
	feeFormatted?: string
};
	["DutchAuctionStatusType"]: DutchAuctionStatusType;
	/** Dutch Auction Collectors */
["CollectorType"]: {
	__typename: "CollectorType",
	address?: string,
	user?: GraphQLTypes["UserProfileType"],
	price?: number
};
	/** EditionOpenSale type */
["editionOpenSale"]: {
	__typename: "editionOpenSale",
	id?: number,
	token?: string,
	operator?: string,
	recipient?: string,
	symbol?: string,
	startTokenId?: string,
	endTokenId?: string,
	price?: string,
	userProfile?: GraphQLTypes["UserProfileType"],
	publication?: GraphQLTypes["publication"],
	contract?: GraphQLTypes["Contract"],
	h?: string,
	network?: string,
	transactionHash?: string,
	contributionLimit?: string,
	version?: string,
	createdAt?: string,
	open?: boolean,
	status?: string,
	publisher?: GraphQLTypes["PublisherType"],
	purchases?: Array<GraphQLTypes["editionOpenSalePurchase"] | undefined>
};
	/** EditionOpenSalePurchase Type */
["editionOpenSalePurchase"]: {
	__typename: "editionOpenSalePurchase",
	tokenId?: number,
	buyer?: string,
	recipient?: string,
	twitterUsername?: string,
	avatarURL?: string,
	transactionHash?: string
};
	/** CrowdfundTokenApprovalMetadata type */
["crowdfundTokenApprovalMetadata"]: {
	__typename: "crowdfundTokenApprovalMetadata",
	id?: number,
	status?: string,
	tokenAddress?: string,
	crowdfundAddress?: string,
	numberOfTokensToApprove?: string,
	tokenOwnerAddress?: string,
	transactionHash?: string
};
	["PluginType"]: {
	__typename: "PluginType",
	_id?: number,
	key?: string,
	name?: string,
	description?: string,
	category?: string,
	imageURL?: string,
	installed?: boolean
};
	/** API Mutations [Create, Update, Delete] */
["mutations"]: {
	__typename: "mutations",
	/** Endpoint for onboarding a contributor */
	registerContributor?: GraphQLTypes["contributor"],
	/** Endpoint for onboarding a contributor */
	registerContributorForPublication?: GraphQLTypes["contributor"],
	/** Endpoint for updating contributor settings */
	updateContributorSettings?: GraphQLTypes["contributor"],
	/** Endpoint for removing a contributor from a publication */
	removeContributor?: GraphQLTypes["success"],
	/** Endpoint for updating an entry's status */
	changeEntryStatus?: boolean,
	/** Endpoint for creating a new entry */
	createEntry?: GraphQLTypes["entry"],
	/** Endpoint for onboarding a contributor */
	addSigningKey?: GraphQLTypes["signingKey"],
	/** Endpoint for onboarding a non-member */
	addNonMemberSigningKey?: GraphQLTypes["signingKey"],
	/** Endpoint for testing signing keys */
	_testSigning?: boolean,
	/** Endpoint for updating an entry */
	updateEntry?: GraphQLTypes["entry"],
	/** Endpoint for updating settings */
	updateSettings?: boolean,
	/** Endpoint for updating publication settings */
	updatePublicationSettings?: GraphQLTypes["publicationSettings"],
	verifyTweet?: boolean,
	verifyTweetV2?: boolean,
	removeTwitter?: boolean,
	/** Save a registration event, get user number back */
	saveRegistrationEvent?: GraphQLTypes["registrationEvent"],
	verifyVote?: boolean,
	/** Endpoint for creating a new crowdfund */
	createCrowdfund?: GraphQLTypes["crowdfund"],
	/** Endpoint for setting transaction hash on a crowdfund */
	setCrowdfundTransactionHash?: boolean,
	/** Endpoint for update crowdfund */
	updateCrowdfund?: GraphQLTypes["crowdfund"],
	/** Endpoint to update crowdfund publish status */
	updateCrowdfundPublishStatus?: GraphQLTypes["crowdfund"],
	/** Endpoint for creating a new NFT */
	createNFT?: GraphQLTypes["nft"],
	/** Endpoint for creating a new reserve auction */
	createReserveAuction?: GraphQLTypes["reserveAuction"],
	/** Endpoint for creating a new prompt response */
	createPromptResponse?: GraphQLTypes["promptResponse"],
	/** Endpoint for creating a split */
	createSplit?: GraphQLTypes["SplitType"],
	/** Endpoint for creating split allocations */
	createSplitAllocations?: boolean,
	/** Endpoint for creating a new crowdfund */
	createEdition?: GraphQLTypes["edition"],
	/** Endpoint for creating crowdfund editions */
	createCrowdfundEditions?: Array<GraphQLTypes["edition"] | undefined>,
	/** Endpoint for creating entry editions */
	createEntryEditions?: Array<GraphQLTypes["edition"] | undefined>,
	/** Endpoint for setting edition(s) transactionHash */
	setEditionTransactionHash?: boolean,
	/** Endpoint for setting edition(s) transactionHash */
	setEditionTransactionHashWithUserProfile?: boolean,
	/** Endpoint for setting up a new media asset */
	createMediaAsset?: GraphQLTypes["MediaAssetType"],
	/** Endpoint for adding a user email */
	addEmail?: GraphQLTypes["email"],
	/** Endpoint for verifying a user's email */
	verifyEmail?: GraphQLTypes["email"],
	/** Endpoint for updating write race notification settings */
	setWriteRaceNotification?: boolean,
	/** Endpoint for creating a user profile */
	createUserProfile?: GraphQLTypes["UserProfileType"],
	/** Endpoint for updating a user profile */
	updateUserProfile?: GraphQLTypes["UserProfileType"],
	/** Endpoint for updating a user profile theme */
	updateUserProfileTheme?: GraphQLTypes["UserProfileThemeType"],
	/** Endpoint for relinking ens */
	relinkEns?: GraphQLTypes["ENS"],
	/** Endpoint for setting a user profile header image */
	setUserProfileHeaderImage?: GraphQLTypes["MediaAssetType"],
	/** Endpoint for adding a survey response */
	addSurveyResponse?: boolean,
	/** Endpoint for creating a crowdfund draft */
	createCrowdfundDraft?: GraphQLTypes["CrowdfundDraft"],
	/** Endpoint for editing a crowdfund draft */
	editCrowdfundDraft?: GraphQLTypes["CrowdfundDraft"],
	/** Endpoint for deleting a crowdfund draft */
	deleteCrowdfundDraft?: boolean,
	/** Endpoint for creating or updating a crowdfund draft */
	createOrUpdateCrowdfundDraft?: GraphQLTypes["CrowdfundDraft"],
	/** Endpoint for setting the crowdfund ID for a crowdfund draft */
	setCrowdfundIdForCrowdfundDraft?: boolean,
	/** Endpoint for creating a new proposal */
	createProposal?: GraphQLTypes["Proposal"],
	/** Endpoint for canceling a new proposal */
	cancelProposal?: boolean,
	/** Endpoint for canceling a new proposal */
	voteOnProposal?: GraphQLTypes["ProposalUserVotingPower"],
	/** Endpoint for adding a multisig to a user */
	addMultisig?: boolean,
	mirrorPollResponse?: boolean,
	/** Endpoint for creating a new Mirror ERC20 token */
	createMirrorERC20Token?: GraphQLTypes["mirrorERC20Token"],
	/** Endpoint for setting transaction hash on a Mirror ERC20 token */
	setMirrorERC20TokenTransactionHash?: boolean,
	/** Endpoint for creating a new crowdfund */
	createEditionsOpenSale?: GraphQLTypes["editionOpenSale"],
	/** Endpoint for creating a new Mirror ERC20 token approval */
	createCrowdfundTokenApproval?: boolean,
	/** Endpoint for setting transaction hash on a Mirror ERC20 token */
	setTransactionHashForCrowdfundTokenApproval?: boolean,
	/** Endpoint for creating a dutch auction */
	createDutchAuction?: GraphQLTypes["DutchAuctionType"],
	setDutchAuctionTransactionHash?: boolean,
	/** Endpoint for inviting a project contributor */
	inviteProjectContributor?: GraphQLTypes["ProjectType"],
	/** Endpoint for accepting a project contributor invite */
	acceptProjectContributorInvite?: GraphQLTypes["ProjectType"],
	/** Endpoint for revoking a project contributor */
	revokeProjectContributor?: GraphQLTypes["ProjectType"],
	/** Endpoint for updating a project */
	updateProject?: GraphQLTypes["ProjectType"],
	/** Endpoint for setting a project header image */
	setProjectHeaderImage?: GraphQLTypes["MediaAssetType"],
	/** Endpoint for updating a user profile theme */
	updateProjectTheme?: GraphQLTypes["ProjectThemeType"],
	/** Endpoint for updating a plugin's installation status for a project */
	updatePluginStatus?: GraphQLTypes["PluginType"]
};
	/** Success type */
["success"]: {
	__typename: "success",
	success?: boolean
};
	/** Edition For Signature type */
["EditionForSignatureType"]: {
		title?: string,
	description?: string,
	quantity?: number,
	price?: number,
	contentHash?: string
};
	/** description */
["SplitAllocationInputType"]: {
		splitId?: number,
	address?: string,
	scaledPercent?: number
};
	/** Edition Input type */
["EditionInputType"]: {
		title?: string,
	description?: string,
	quantity?: number,
	price?: number,
	contentHash?: string,
	artifactPrimaryId?: number,
	artifactThumbnailId?: number,
	singleArtifact?: boolean,
	attributes?: Array<GraphQLTypes["EditionAttributeInputType"] | undefined>
};
	/** description */
["EditionAttributeInputType"]: {
		trait_type?: string,
	display_type?: string,
	value?: string
};
	/** description */
["MediaAssetSizesInputType"]: {
		og?: GraphQLTypes["MediaAssetSizeInputType"],
	lg?: GraphQLTypes["MediaAssetSizeInputType"],
	md?: GraphQLTypes["MediaAssetSizeInputType"],
	sm?: GraphQLTypes["MediaAssetSizeInputType"]
};
	/** description */
["MediaAssetSizeInputType"]: {
		height?: number,
	width?: number,
	src?: string,
	size?: string
};
	/** Proposal entry input (single) */
["ProposalEntryInput"]: {
		body?: string,
	address?: string,
	twitterUsername?: string
};
	/** Project Theme */
["ProjectThemeType"]: {
	__typename: "ProjectThemeType",
	colorMode?: GraphQLTypes["ColorModeType"],
	accent?: GraphQLTypes["AccentType"]
}
    }
export const enum ColorModeType {
	DARK = "DARK",
	LIGHT = "LIGHT"
}
export const enum AccentType {
	BLUE = "BLUE",
	GREEN = "GREEN",
	INDIGO = "INDIGO",
	ORANGE = "ORANGE",
	PINK = "PINK",
	PURPLE = "PURPLE",
	RED = "RED",
	TEAL = "TEAL",
	YELLOW = "YELLOW",
	FOREGROUND = "FOREGROUND"
}
export const enum BlockStatusEnum {
	CREATED = "CREATED",
	CONFIRMED = "CONFIRMED",
	PENDING = "PENDING",
	DROPPED = "DROPPED",
	FAILED = "FAILED"
}
export const enum VerificationStatusEnum {
	EMAIL_NOT_VERIFIED = "EMAIL_NOT_VERIFIED",
	EMAIL_VERIFIED = "EMAIL_VERIFIED",
	EMAIL_NOT_SUBMITTED = "EMAIL_NOT_SUBMITTED"
}
export const enum MirrorPollStatusEnum {
	DELETED = "DELETED",
	ENDED = "ENDED",
	LIVE = "LIVE",
	CREATED = "CREATED"
}
export const enum DutchAuctionStatusType {
	CREATED = "CREATED",
	PENDING = "PENDING",
	CONFIRMED = "CONFIRMED",
	DROPPED = "DROPPED",
	FAILED = "FAILED"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "query",
    "mutation": "mutations"
}

export type GenericOperation<O> = O extends 'query'
  ? "query"
  : O extends 'mutation'
  ? "mutations"
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  