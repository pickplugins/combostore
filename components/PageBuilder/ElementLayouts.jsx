import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { IconFileInvoice, IconFileDots, IconBrowserPlus, IconCopy, IconTrash, IconClipboard, IconPaintFilled, IconEyeShare, IconDeviceFloppy } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useExtensionsStore } from '../../store/useExtensionsStore';
import registry from '../../extensions';
import { useDraggable } from '@dnd-kit/react';
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import Link from 'next/link';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import DropDown from "../../components/DropDown";

import PostGrid from './element-layouts/PostGrid'
import PostSlider from './element-layouts/PostSlider'
import TermsGrid from './element-layouts/TermsGrid'
import TermsSlider from './element-layouts/TermsSlider'
import Featurebox from './element-layouts/Featurebox'
import TabsX from './element-layouts/Tabs'
import Accordion from './element-layouts/Accordion'
import SiteFooter from './element-layouts/SiteFooter'
import SiteHeader from './element-layouts/SiteHeader'
import LinkList from './element-layouts/LinkList'
import CommentsGrid from './element-layouts/CommentsGrid'
import RelatedProducts from './element-layouts/RelatedProducts'
import ProductVariablePrices from './element-layouts/ProductVariablePrices'
import ProductSku from './element-layouts/ProductSku'
import ProductPrice from './element-layouts/ProductPrice'
import ProductDiscount from './element-layouts/ProductDiscount'
import ProductRatings from './element-layouts/ProductRatings'
import ProductStockStatus from './element-layouts/ProductStockStatus'
import ProductTags from './element-layouts/ProductTags'
import ProductCategories from './element-layouts/ProductCategories'
import ProductBadge from './element-layouts/ProductBadge'
import ProductGallery from './element-layouts/ProductGallery'
import Address from './element-layouts/Address'
import Login from './element-layouts/Login'
import Heading from './element-layouts/Heading'
import List from './element-layouts/List'
import Image from './element-layouts/Image'
import Icon from './element-layouts/Icon'
import Logo from './element-layouts/Logo'
import PostThumbnail from './element-layouts/PostThumbnail'
import PostExcerpt from './element-layouts/PostExcerpt'
import CustomerAccount from './element-layouts/CustomerAccount'
import AddToCart from './element-layouts/AddToCart'
import MessengerButton from './element-layouts/MessengerButton'
import Menu from './element-layouts/Menu'
import Grid from './element-layouts/Grid'
import ProductBrands from './element-layouts/ProductBrands'
import Register from './element-layouts/Register'
import WhatsappButton from './element-layouts/WhatsappButton'
import LoginByPhone from './element-layouts/LoginByPhone'
import Cart from './element-layouts/Cart'
import Button from './element-layouts/Button'



const Templates = (props) => {


	var type = props?.type;

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var selectedBlock = props?.selectedBlock;
	var updateBlock = props?.updateBlock;

	var handlePasteBlock = props?.handlePasteBlock;
	var handleReplaceBlock = props?.handleReplaceBlock;


	var [layouts, setlayouts] = useState([]);

	/* Preset lists keyed by block type, from the active extensions. */
	const activeExtensionIds = useExtensionsStore((s) => s.activeIds);
	const extensionLayouts = useMemo(
		() => registry.elementLayouts(activeExtensionIds),
		[activeExtensionIds]
	);



	useEffect(() => {


		var type = selectedBlock.type

		console.log(type);


		if (type == 'commentsGrid') {
			setlayouts(CommentsGrid)
		}
		else if (type == 'postGrid') {
			setlayouts(PostGrid)
		}
		else if (type == 'postSlider') {
			setlayouts(PostSlider)
		}
		else if (type == 'termsGrid') {
			setlayouts(TermsGrid)
		}
		else if (type == 'termsSlider') {
			setlayouts(TermsSlider)
		}
		else if (type == 'relatedProducts') {
			setlayouts(RelatedProducts)
		}


		else if (type == 'featurebox') {
			setlayouts(Featurebox)
		}
		else if (type == 'tabs') {
			setlayouts(TabsX)
		}
		else if (type == 'accordion') {
			setlayouts(Accordion)
		}
		else if (type == 'siteFooter') {
			setlayouts(SiteFooter)
		}
		else if (type == 'siteHeader') {
			setlayouts(SiteHeader)
		}
		else if (type == 'linkList') {
			setlayouts(LinkList)
		}
		else if (type == 'productVariablePrices') {
			setlayouts(ProductVariablePrices)
		}
		else if (type == 'productSku') {
			setlayouts(ProductSku)
		}
		else if (type == 'productPrice') {
			setlayouts(ProductPrice)
		}
		else if (type == 'productDiscount') {
			setlayouts(ProductDiscount)
		}
		else if (type == 'productRatings') {
			setlayouts(ProductRatings)
		}
		else if (type == 'productStockStatus') {
			setlayouts(ProductStockStatus)
		}
		else if (type == 'productTags') {
			setlayouts(ProductTags)
		}
		else if (type == 'productCategories') {
			setlayouts(ProductCategories)
		}
		else if (type == 'productBadge') {
			setlayouts(ProductBadge)
		}
		else if (type == 'productGallery') {
			setlayouts(ProductGallery)
		}
		else if (type == 'address') {
			setlayouts(Address)
		}
		else if (type == 'login') {
			setlayouts(Login)
		}
		else if (type == 'heading') {
			setlayouts(Heading)
		}
		else if (type == 'list') {
			setlayouts(List)
		}
		else if (type == 'image') {
			setlayouts(Image)
		}
		else if (type == 'icon') {
			setlayouts(Icon)
		}
		else if (type == 'logo') {
			setlayouts(Logo)
		}
		else if (type == 'postThumbnail') {
			setlayouts(PostThumbnail)
		}
		else if (type == 'postExcerpt') {
			setlayouts(PostExcerpt)
		}
		else if (type == 'customerAccount') {
			setlayouts(CustomerAccount)
		}
		else if (type == 'addToCart') {
			setlayouts(AddToCart)
		}
		else if (type == 'messengerButton') {
			setlayouts(MessengerButton)
		}
		else if (type == 'menu') {
			setlayouts(Menu)
		}
		else if (type == 'grid') {
			setlayouts(Grid)
		}
		else if (type == 'productBrands') {
			setlayouts(ProductBrands)
		}
		else if (type == 'register') {
			setlayouts(Register)
		}
		else if (type == 'whatsappButton') {
			setlayouts(WhatsappButton)
		}
		else if (type == 'loginByPhone') {
			setlayouts(LoginByPhone)
		}
		else if (type == 'cart') {
			setlayouts(Cart)
		}
		else if (type == 'button') {
			setlayouts(Button)
		}








		/*
			Layout presets from the active extensions.

			Last, so the core branches above always win for a core type. An
			extension registers its presets on the element itself, in the
			manifest, rather than needing a branch added to this chain.
		*/
		else if (extensionLayouts[type]) {
			setlayouts(extensionLayouts[type])
		}

		else {
			setlayouts([])

		}



	}, [selectedBlock, extensionLayouts]);







	return (
		<div className="flex flex-col gap-5 py-5 px-3">

			{layouts.map(item => {


				return (

					<div
						className="cursor-pointer border rounded-sm p-3 flex flex-col gap-3"
					>

						<div>{item.title}</div>

						<div className="flex gap-3 items-center text-sm">


							<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
								onClick={ev => {

									var content = item?.content
									handlePasteBlock(content);

								}} >
								Add
							</div>
							<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
								onClick={ev => {

									var content = item?.content
									handleReplaceBlock(content);

								}} >
								Replace
							</div>




						</div>
					</div>

				)

			})}









		</div>
	);
};



export default Templates;
