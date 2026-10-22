import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useExtensionsStore } from '../../store/useExtensionsStore';
import registry from '../../extensions';
import HeadingOptions from './elements/HeadingOptions';
import ButtonOptions from './elements/ButtonOptions';
import TextOptions from './elements/TextOptions';
import ListOptions from './elements/ListOptions';
import AccordionMenuOptions from './elements/AccordionMenuOptions';
import VideoOptions from './elements/VideoOptions';
import ContentSliderOptions from './elements/ContentSliderOptions';
import PostGridOptions from './elements/PostGridOptions';
import CommentRateOptions from './elements/CommentRateOptions';
import CommentContentOptions from './elements/CommentContentOptions';
import CommentAuthorOptions from './elements/CommentAuthorOptions';
import CommentAvatarOptions from './elements/CommentAvatarOptions';
import CommentsGridPaginationOptions from './elements/CommentsGridPaginationOptions';
import CommentsGridOptions from './elements/CommentsGridOptions';
import PostGridPaginationOptions from './elements/PostGridPaginationOptions';
import TermsSliderOptions from './elements/TermsSliderOptions';
import TermTitleOptions from './elements/TermTitleOptions';
import TermThumbnailOptions from './elements/TermThumbnailOptions';
import ImageOptions from './elements/ImageOptions';
import QuickSearchOptions from './elements/QuickSearchOptions';
import LogoOptions from './elements/LogoOptions';
import MenuOptions from './elements/MenuOptions';
import MenuItemOptions from './elements/MenuItemOptions';
import LinkListOptions from './elements/LinkListOptions';
import GridOptions from './elements/GridOptions';
import GridItemOptions from './elements/GridItemOptions';
import SectionOptions from './elements/SectionOptions';
import ContainerOptions from './elements/ContainerOptions';
import PostSliderOptions from './elements/PostSliderOptions';
import PostTitleOptions from './elements/PostTitleOptions';
import PostThumbnailOptions from './elements/PostThumbnailOptions';
import TermsGridOptions from './elements/TermsGridOptions';
import TermsGridPaginationOptions from './elements/TermsGridPaginationOptions';
import ArchiveTitleOptions from './elements/ArchiveTitleOptions';
import SiteHeaderOptions from './elements/SiteHeaderOptions';
import SiteFooterOptions from './elements/SiteFooterOptions';
import SidebarOptions from './elements/SidebarOptions';
import ColumnsOptions from './elements/ColumnsOptions';
import ColumnItemOptions from './elements/ColumnItemOptions';
import PopupOptions from './elements/PopupOptions';
import ProductArchiveOptions from './elements/ProductArchiveOptions';
import ProductPriceOptions from './elements/ProductPriceOptions';
import ProductVariablePricesOptions from './elements/ProductVariablePricesOptions';
import RelatedProductsOptions from './elements/RelatedProductsOptions';
import CommentsOptions from './elements/CommentsOptions';
import CommentsFormOptions from './elements/CommentsFormOptions';
import CommentsListOptions from './elements/CommentsListOptions';
import WhatsappButtonOptions from './elements/WhatsappButtonOptions';
import MessengerButtonOptions from './elements/MessengerButtonOptions';
import ProductCategoriesOptions from './elements/ProductCategoriesOptions';
import ProductTagsOptions from './elements/ProductTagsOptions';
import ProductBrandsOptions from './elements/ProductBrandsOptions';
import ProductSkuOptions from './elements/ProductSkuOptions';
import ProductUpsellsOptions from './elements/ProductUpsellsOptions';
import ProductGalleryOptions from './elements/ProductGalleryOptions';
import RequestForStockOptions from './elements/RequestForStockOptions';
import TabsOptions from './elements/TabsOptions';
import TabsItemOptions from './elements/TabsItemOptions';
import AccordionOptions from './elements/AccordionOptions';
import AccordionItemOptions from './elements/AccordionItemOptions';
import IconOptions from './elements/IconOptions';
import InputOptions from './elements/InputOptions';
import SelectOptions from './elements/SelectOptions';
import GlobalSearchOptions from './elements/GlobalSearchOptions';
import ArchiveDescriptionOptions from './elements/ArchiveDescriptionOptions';
import ArchiveCountOptions from './elements/ArchiveCountOptions';
import PostContentOptions from './elements/PostContentOptions';
import PostExcerptOptions from './elements/PostExcerptOptions';
import PostAuthorOptions from './elements/PostAuthorOptions';
import PostDateOptions from './elements/PostDateOptions';
import FeatureboxOptions from './elements/FeatureboxOptions';
import FeatureboxItemOptions from './elements/FeatureboxItemOptions';
import AddressOptions from './elements/AddressOptions';
import ProductRatingsOptions from './elements/ProductRatingsOptions';
import ProductBadgeOptions from './elements/ProductBadgeOptions';
import ProductDiscountOptions from './elements/ProductDiscountOptions';
import CartOptions from './elements/CartOptions';
import ProductStockStatusOptions from './elements/ProductStockStatusOptions';
import AddToCartOptions from './elements/AddToCartOptions';
import PopoverButtonOptions from './elements/PopoverButtonOptions';
import LoginOptions from './elements/LoginOptions';
import RegisterOptions from './elements/RegisterOptions';
import NotifyOptions from './elements/NotifyOptions';
import CollectionsOptions from './elements/CollectionsOptions';
import CollectionsFieldOptions from './elements/CollectionsFieldOptions';


const ElementOptions = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var selectedBlock = props?.selectedBlock;
	var updateBlock = props?.updateBlock;

	var deleteBlock = props?.deleteBlock;
	var duplicateBlock = props?.duplicateBlock;
	var handleMoveBlock = props?.handleMoveBlock;

	/* The options panel for the selected block, when an active extension owns
	   its type. Undefined for every core type, which is what keeps the core
	   chain above authoritative. */
	const activeExtensionIds = useExtensionsStore((s) => s.activeIds);
	const ExtensionOptions = React.useMemo(() => {
		if (!selectedBlock?.type) return null;
		return registry.elementOptions(activeExtensionIds)[selectedBlock.type] ?? null;
	}, [activeExtensionIds, selectedBlock?.type]);

	var title = props.title;
	var prams = props.prams;

	const [loading, setloading] = useState(false);



	return (
		<div className="">



			{selectedBlock?.type == 'heading' && (
				<HeadingOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'archiveDescription' && (
				<ArchiveDescriptionOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'archiveCount' && (
				<ArchiveCountOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postContent' && (
				<PostContentOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postExcerpt' && (
				<PostExcerptOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postAuthor' && (
				<PostAuthorOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postDate' && (
				<PostDateOptions {...selectedBlock} updateBlock={updateBlock} />
			)}



			{selectedBlock?.type == 'text' && (
				<TextOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'button' && (
				<ButtonOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'list' && (
				<ListOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'accordionMenu' && (
				<AccordionMenuOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'video' && (
				<VideoOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'contentSlider' && (
				<ContentSliderOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'termsSlider' && (
				<TermsSliderOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'columns' && (
				<ColumnsOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'columnItem' && (
				<ColumnItemOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'popup' && (
				<PopupOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productArchive' && (
				<ProductArchiveOptions {...selectedBlock} updateBlock={updateBlock} />
			)}

			{selectedBlock?.type == 'productPrice' && (
				<ProductPriceOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productVariablePrices' && (
				<ProductVariablePricesOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'relatedProducts' && (
				<RelatedProductsOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'comments' && (
				<CommentsOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentsForm' && (
				<CommentsFormOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentsList' && (
				<CommentsListOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'whatsappButton' && (
				<WhatsappButtonOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'messengerButton' && (
				<MessengerButtonOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productCategories' && (
				<ProductCategoriesOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productTags' && (
				<ProductTagsOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productBrands' && (
				<ProductBrandsOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productSku' && (
				<ProductSkuOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productUpsells' && (
				<ProductUpsellsOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'productGallery' && (
				<ProductGalleryOptions {...selectedBlock} updateBlock={updateBlock} />
			)}

			{selectedBlock?.type == 'requestForStock' && (
				<RequestForStockOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'tabs' && (
				<TabsOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'tabsItem' && (
				<TabsItemOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'accordion' && (
				<AccordionOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'accordionItem' && (
				<AccordionItemOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'icon' && (
				<IconOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'input' && (
				<InputOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'select' && (
				<SelectOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'globalSearch' && (
				<GlobalSearchOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}


			{selectedBlock?.type == 'image' && (
				<ImageOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'logo' && (
				<LogoOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'quickSearch' && (
				<QuickSearchOptions {...selectedBlock} updateBlock={updateBlock} />
			)}


			{selectedBlock?.type == 'menu' && (
				<MenuOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'menuItem' && (
				<MenuItemOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'linkList' && (
				<LinkListOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'siteHeader' && (
				<SiteHeaderOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'siteFooter' && (
				<SiteFooterOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'sidebar' && (
				<SidebarOptions {...selectedBlock} updateBlock={updateBlock} />
			)}


			{selectedBlock?.type == 'grid' && (
				<GridOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'gridItem' && (
				<GridItemOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'section' && (
				<SectionOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'container' && (
				<ContainerOptions {...selectedBlock} updateBlock={updateBlock} />
			)}

			{selectedBlock?.type == 'CommentRate' && (
				<CommentRateOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentContent' && (
				<CommentContentOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentAuthor' && (
				<CommentAuthorOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentAvatar' && (
				<CommentAvatarOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentsGridPagination' && (
				<CommentsGridPaginationOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'commentsGrid' && (
				<CommentsGridOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postGrid' && (
				<PostGridOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postGridPagination' && (
				<PostGridPaginationOptions {...selectedBlock} updateBlock={updateBlock} />
			)}

			{selectedBlock?.type == 'postSlider' && (
				<PostSliderOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postTitle' && (
				<PostTitleOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'postThumbnail' && (
				<PostThumbnailOptions {...selectedBlock} updateBlock={updateBlock} />
			)}


			{selectedBlock?.type == 'termTitle' && (
				<TermTitleOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'termThumbnail' && (
				<TermThumbnailOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'termsGrid' && (
				<TermsGridOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'termsGridPagination' && (
				<TermsGridPaginationOptions {...selectedBlock} updateBlock={updateBlock} />
			)}

			{selectedBlock?.type == 'archiveTitle' && (
				<ArchiveTitleOptions {...selectedBlock} updateBlock={updateBlock} />
			)}
			{selectedBlock?.type == 'featurebox' && (
				<FeatureboxOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'featureboxItem' && (
				<FeatureboxItemOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'address' && (
				<AddressOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'productRatings' && (
				<ProductRatingsOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'ProductBadge' && (
				<ProductBadgeOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'productDiscount' && (
				<ProductDiscountOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'cart' && (
				<CartOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'productStockStatus' && (
				<ProductStockStatusOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'addToCart' && (
				<AddToCartOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'popoverButton' && (
				<PopoverButtonOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'login' && (
				<LoginOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'register' && (
				<RegisterOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'notify' && (
				<NotifyOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'collections' && (
				<CollectionsOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}
			{selectedBlock?.type == 'collectionsField' && (
				<CollectionsFieldOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}

			{/*
				Options panels from the active extensions.

				After the core chain, so a core type keeps its own panel. The
				block is spread in and `updateBlock` passed exactly as above, so
				an extension panel is written against the same contract as a core
				one - and mounting <CssSelectors> inside it is what gives the
				block the per-selector class editor.
			*/}
			{ExtensionOptions && (
				<ExtensionOptions {...selectedBlock} updateBlock={updateBlock} handleMoveBlock={handleMoveBlock} />
			)}








			{/* {JSON.stringify(selectedId)} */}


		</div>
	);
};



export default ElementOptions;
