import { ReactComponent as Arrow } from './Icons/arrow.svg'
import { ReactComponent as ArrowBack } from './Icons/arrow_back.svg'
import { ReactComponent as Cart } from './Icons/cart.svg'
import { ReactComponent as Trash } from './Icons/trash.svg'
import { ReactComponent as EmptyCart } from './Icons/empty_cart.svg'

export type IconType = 'cart' | 'arrow' | 'arrow_back' | 'empty_cart' | 'trash'

export const IconTypes: Map<IconType, JSX.Element> = new Map([
	['cart', <Cart />],
	['arrow', <Arrow />],
	['arrow_back', <ArrowBack />],
	['empty_cart', <EmptyCart/>],
	['trash', <Trash />]
])
