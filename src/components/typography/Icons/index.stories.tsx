import { SVGProps } from './types'
import { Meta, Story } from '@storybook/react'
import { Address as AddressIcon } from './Address'
import { AlertError as AlertErrorIcon } from './AlertError'
import { AlertSuccess as AlertSuccessIcon } from './AlertSuccess'
import { AlertWarning as AlertWarningIcon } from './AlertWarning'
import { Attendance as AttendanceIcon } from './Attendance'
import { Avon as AvonIcon } from './Avon'
import { Back as BackIcon } from './Back'
import { Bag as BagIcon } from './Bag'
import { Beauty as BeautyIcon } from './Beauty'
import { BlackFriday as BlackFridayIcon } from './BlackFriday'
import { Board as BoardIcon } from './Board'
import { Brazil as BrazilIcon } from './Brazil'
import { Calendar as CalendarIcon } from './Calendar'
import { Card as CardIcon } from './Card'
import { CardPnb as CardPnbIcon } from './CardPnb'
import { Carpet as CarpetIcon } from './Carpet'
import { Categories as CategoriesIcon } from './Categories'
import { Charge as ChargeIcon } from './Charge'
import { Check as CheckIcon } from './Check'
import { Clock as ClockIcon } from './Clock'
import { Computing as ComputingIcon } from './Computing'
import { ControlPanel as ControlPanelIcon } from './ControlPanel'
import { CorporatePurchases as CorporatePurchasesIcon } from './CorporatePurchases'
import { Couch as CouchIcon } from './Couch'
import { Coupon as CouponIcon } from './Coupon'
import { DcFandome as DcFandomeIcon } from './DcFandome'
import { Decoration as DecorationIcon } from './Decoration'
import { DigitalBag as DigitalBagIcon } from './DigitalBag'
import { DigitalWallet as DigitalWalletIcon } from './DigitalWallet'
import { DiscountBags as DiscountBagsIcon } from './DiscountBags'
import { Discounter as DiscounterIcon } from './Discounter'
import { Edit as EditIcon } from './Edit'
import { Email as EmailIcon } from './Email'
import { Eye as EyeIcon } from './Eye'
import { EyeOff as EyeOffIcon } from './EyeOff'
import { Female as FemaleIcon } from './Female'
import { Forward as ForwardIcon } from './Forward'
import { GiftCard as GiftCardIcon } from './GiftCard'
import { GiftList as GiftListIcon } from './GiftList'
import { Glasses as GlassesIcon } from './Glasses'
import { Heart as HeartIcon } from './Heart'
import { HeartFilled as HeartFilledIcon } from './HeartFilled'
import { History as HistoryIcon } from './History'
import { InfantUniform as InfantUniformIcon } from './InfantUniform'
import { Info as InfoIcon } from './Info'
import { Jequiti as JequitiIcon } from './Jequiti'
import { Kids as KidsIcon } from './Kids'
import { Location as LocationIcon } from './Location'
import { Logout as LogoutIcon } from './Logout'
import { LoveLingerie as LoveLingerieIcon } from './LoveLingerie'
import { Male as MaleIcon } from './Male'
import { Map as MapIcon } from './Map'
import { Megaphone as MegaphoneIcon } from './Megaphone'
import { Menu as MenuIcon } from './Menu'
import { Mobile as MobileIcon } from './Mobile'
import { Mural as MuralIcon } from './Mural'
import { Newsletter as NewsletterIcon } from './Newsletter'
import { Notification as NotificationIcon } from './Notification'
import { Oportunity as OportunityIcon } from './Oportunity'
import { Pet as PetIcon } from './Pet'
import { Phone as PhoneIcon } from './Phone'
import { PlusSizeFashion as PlusSizeFashionIcon } from './PlusSizeFashion'
import { PnbHouse as PnbHouseIcon } from './PnbHouse'
import { PortableElectro as PortableElectroIcon } from './PortableElectro'
import { PreferredStore as PreferredStoreIcon } from './PreferredStore'
import { Privacy as PrivacyIcon } from './Privacy'
import { Purchases as PurchasesIcon } from './Purchases'
import { QrCode as QrCodeIcon } from './QrCode'
import { Reminder as ReminderIcon } from './Reminder'
import { Sac as SacIcon } from './Sac'
import { Scan as ScanIcon } from './Scan'
import { SceneAction as SceneActionIcon } from './SceneAction'
import { Search as SearchIcon } from './Search'
import { Share as ShareIcon } from './Share'
import { Shirt as ShirtIcon } from './Shirt'
import { Shoes as ShoesIcon } from './Shoes'
import { Smile as SmileIcon } from './Smile'
import { Star as StarIcon } from './Star'
import { StoreCredit as StoreCreditIcon } from './StoreCredit'
import { Swinwear as SwinwearIcon } from './Swinwear'
import { TagMoney as TagMoneyIcon } from './TagMoney'
import { Tips as TipsIcon } from './Tips'
import { Underwear as UnderwearIcon } from './Underwear'
import { UsedSale as UsedSaleIcon } from './UsedSale'
import { User as UserIcon } from './User'
import { UserLogout as UserLogoutIcon } from './UserLogout'
import { VirtualStore as VirtualStoreIcon } from './VirtualStore'
import { Whatsapp as WhatsappIcon } from './Whatsapp'
import { Wifi as WifiIcon } from './Wifi'
import { YoungMale as YoungMaleIcon } from './YoungMale'
import { Profile as ProfileIcon } from './Profile'
import { Wallet as WalletIcon } from './Wallet'
import { Pig as PigIcon } from './Pig'
import { WebMenu as WebMenuIcon } from './WebMenu'
import { Percent as PercentIcon } from './Percent'

export default {
  title: 'Basic/Icons',
  component: AddressIcon,
  args: { size: 42 }
} as Meta

export const Address: Story<SVGProps> = args => <AddressIcon {...args} />
Address.args = {
  size: 98
}
export const AlertError: Story<SVGProps> = args => <AlertErrorIcon {...args} />
export const AlertSuccess: Story<SVGProps> = args => (
  <AlertSuccessIcon {...args} />
)
export const AlertWarning: Story<SVGProps> = args => (
  <AlertWarningIcon {...args} />
)
export const Attendance: Story<SVGProps> = args => <AttendanceIcon {...args} />
export const Avon: Story<SVGProps> = args => <AvonIcon {...args} />
export const Back: Story<SVGProps> = args => <BackIcon {...args} />
export const Bag: Story<SVGProps> = args => <BagIcon {...args} />
export const Beauty: Story<SVGProps> = args => <BeautyIcon {...args} />
export const BlackFriday: Story<SVGProps> = args => (
  <BlackFridayIcon {...args} />
)
export const Board: Story<SVGProps> = args => <BoardIcon {...args} />
export const Brazil: Story<SVGProps> = args => <BrazilIcon {...args} />
export const Calendar: Story<SVGProps> = args => <CalendarIcon {...args} />
export const Card: Story<SVGProps> = args => <CardIcon {...args} />
export const CardPnb: Story<SVGProps> = args => <CardPnbIcon {...args} />
export const Carpet: Story<SVGProps> = args => <CarpetIcon {...args} />
export const Categories: Story<SVGProps> = args => <CategoriesIcon {...args} />
export const Charge: Story<SVGProps> = args => <ChargeIcon {...args} />
export const Check: Story<SVGProps> = args => <CheckIcon {...args} />
export const Clock: Story<SVGProps> = args => <ClockIcon {...args} />
export const Computing: Story<SVGProps> = args => <ComputingIcon {...args} />
export const ControlPanel: Story<SVGProps> = args => (
  <ControlPanelIcon {...args} />
)
export const CorporatePurchases: Story<SVGProps> = args => (
  <CorporatePurchasesIcon {...args} />
)
export const Couch: Story<SVGProps> = args => <CouchIcon {...args} />
export const Coupon: Story<SVGProps> = args => <CouponIcon {...args} />
export const DcFandome: Story<SVGProps> = args => <DcFandomeIcon {...args} />
export const Decoration: Story<SVGProps> = args => <DecorationIcon {...args} />
export const DigitalBag: Story<SVGProps> = args => <DigitalBagIcon {...args} />
export const DigitalWallet: Story<SVGProps> = args => (
  <DigitalWalletIcon {...args} />
)
export const DiscountBags: Story<SVGProps> = args => (
  <DiscountBagsIcon {...args} />
)
export const Discounter: Story<SVGProps> = args => <DiscounterIcon {...args} />
export const Edit: Story<SVGProps> = args => <EditIcon {...args} />
export const Email: Story<SVGProps> = args => <EmailIcon {...args} />
export const Eye: Story<SVGProps> = args => <EyeIcon {...args} />
export const EyeOff: Story<SVGProps> = args => <EyeOffIcon {...args} />
export const Female: Story<SVGProps> = args => <FemaleIcon {...args} />
export const Forward: Story<SVGProps> = args => <ForwardIcon {...args} />
export const GiftCard: Story<SVGProps> = args => <GiftCardIcon {...args} />
export const GiftList: Story<SVGProps> = args => <GiftListIcon {...args} />
export const Glasses: Story<SVGProps> = args => <GlassesIcon {...args} />
export const Heart: Story<SVGProps> = args => <HeartIcon {...args} />
export const HeartFilled: Story<SVGProps> = args => (
  <HeartFilledIcon {...args} />
)
export const History: Story<SVGProps> = args => <HistoryIcon {...args} />
export const InfantUniform: Story<SVGProps> = args => (
  <InfantUniformIcon {...args} />
)
export const Info: Story<SVGProps> = args => <InfoIcon {...args} />
export const Jequiti: Story<SVGProps> = args => <JequitiIcon {...args} />
export const Kids: Story<SVGProps> = args => <KidsIcon {...args} />
export const Location: Story<SVGProps> = args => <LocationIcon {...args} />
export const Logout: Story<SVGProps> = args => <LogoutIcon {...args} />
export const LoveLingerie: Story<SVGProps> = args => (
  <LoveLingerieIcon {...args} />
)
export const Male: Story<SVGProps> = args => <MaleIcon {...args} />
export const Map: Story<SVGProps> = args => <MapIcon {...args} />
export const Megaphone: Story<SVGProps> = args => <MegaphoneIcon {...args} />
export const Menu: Story<SVGProps> = args => <MenuIcon {...args} />
export const Mobile: Story<SVGProps> = args => <MobileIcon {...args} />
export const Mural: Story<SVGProps> = args => <MuralIcon {...args} />
export const Newsletter: Story<SVGProps> = args => <NewsletterIcon {...args} />
export const Notification: Story<SVGProps> = args => (
  <NotificationIcon {...args} />
)
export const Oportunity: Story<SVGProps> = args => <OportunityIcon {...args} />
export const Pet: Story<SVGProps> = args => <PetIcon {...args} />
export const Percent: Story<SVGProps> = args => <PercentIcon {...args} />
export const Pig: Story<SVGProps> = args => <PigIcon {...args} />
export const Phone: Story<SVGProps> = args => <PhoneIcon {...args} />
export const PlusSizeFashion: Story<SVGProps> = args => (
  <PlusSizeFashionIcon {...args} />
)
export const PnbHouse: Story<SVGProps> = args => <PnbHouseIcon {...args} />
export const PortableElectro: Story<SVGProps> = args => (
  <PortableElectroIcon {...args} />
)
export const PreferredStore: Story<SVGProps> = args => (
  <PreferredStoreIcon {...args} />
)
export const Privacy: Story<SVGProps> = args => <PrivacyIcon {...args} />
export const Profile: Story<SVGProps> = args => <ProfileIcon {...args} />
export const Purchases: Story<SVGProps> = args => <PurchasesIcon {...args} />
export const QrCode: Story<SVGProps> = args => <QrCodeIcon {...args} />
export const Reminder: Story<SVGProps> = args => <ReminderIcon {...args} />
export const Sac: Story<SVGProps> = args => <SacIcon {...args} />
export const Scan: Story<SVGProps> = args => <ScanIcon {...args} />
export const SceneAction: Story<SVGProps> = args => (
  <SceneActionIcon {...args} />
)
export const Search: Story<SVGProps> = args => <SearchIcon {...args} />
export const Share: Story<SVGProps> = args => <ShareIcon {...args} />
export const Shirt: Story<SVGProps> = args => <ShirtIcon {...args} />
export const Shoes: Story<SVGProps> = args => <ShoesIcon {...args} />
export const Smile: Story<SVGProps> = args => <SmileIcon {...args} />
export const Star: Story<SVGProps> = args => <StarIcon {...args} />
export const StoreCredit: Story<SVGProps> = args => (
  <StoreCreditIcon {...args} />
)
export const Swinwear: Story<SVGProps> = args => <SwinwearIcon {...args} />
export const TagMoney: Story<SVGProps> = args => <TagMoneyIcon {...args} />
export const Tips: Story<SVGProps> = args => <TipsIcon {...args} />
export const Underwear: Story<SVGProps> = args => <UnderwearIcon {...args} />
export const UsedSale: Story<SVGProps> = args => <UsedSaleIcon {...args} />
export const User: Story<SVGProps> = args => <UserIcon {...args} />
export const UserLogout: Story<SVGProps> = args => <UserLogoutIcon {...args} />
export const VirtualStore: Story<SVGProps> = args => (
  <VirtualStoreIcon {...args} />
)
export const Wallet: Story<SVGProps> = args => <WalletIcon {...args} />
export const WebMenu: Story<SVGProps> = args => <WebMenuIcon {...args} />
export const Whatsapp: Story<SVGProps> = args => <WhatsappIcon {...args} />
export const Wifi: Story<SVGProps> = args => <WifiIcon {...args} />
export const YoungMale: Story<SVGProps> = args => <YoungMaleIcon {...args} />
