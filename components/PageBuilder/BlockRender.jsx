import React from "react";

import registry from '../../extensions';

/*
	Block renderers contributed by the extensions, for the live page.

	BlockPreview does the same for the canvas, but reads the activation store;
	this file is rendered from a server component (app/[...slug]/page.jsx), so
	there is no store to read and the manifests' own `enabled` is the answer.
	That is the right one anyway: the on/off switch on Dashboard → Extensions
	is kept in the editing browser's localStorage and was never going to reach
	a shopper.

	Built once at module scope rather than per render - the manifest list is
	static, so there is nothing to recompute.
*/
const extensionRenderers = registry.elementRenderers(registry.defaultActiveIds);

import HeadingView from './elements/HeadingView';
import AccordionMenuView from './elements/AccordionMenuView';
import TermTitleView from './elements/TermTitleView';
import TermCountView from './elements/TermCountView';
import TermThumbnailView from './elements/TermThumbnailView';
import ButtonView from './elements/ButtonView';
import TextView from './elements/TextView';
import ListView from './elements/ListView';
import VideoView from './elements/VideoView';
import ContentSliderView from './elements/ContentSliderView';
import TermsSliderView from './elements/TermsSliderView';
import PostGridView from './elements/PostGridView';
import TermsGridView from './elements/TermsGridView';
import TermsGridPaginationView from './elements/TermsGridPaginationView';
import TermsLoopView from './elements/TermsLoopView';
import PostLoopView from './elements/PostLoopView';
import PostGridPaginationView from './elements/PostGridPaginationView';
import PostSliderView from './elements/PostSliderView';
import PostTitleView from './elements/PostTitleView';
import PostThumbnailView from './elements/PostThumbnailView';
import ImageView from './elements/ImageView';
import LogoView from './elements/LogoView';
import FooterLinksView from './elements/FooterLinksView';
import SiteHeaderView from './elements/SiteHeaderView';
import SiteFooterView from './elements/SiteFooterView';
import QuickSearchView from './elements/QuickSearchView';
import GridView from './elements/GridView';
import GridItemView from './elements/GridItemView';
import ColumnItemView from './elements/ColumnItemView';
import ColumnsView from './elements/ColumnsView';
import SidebarView from './elements/SidebarView';
import SectionView from './elements/SectionView';
import ContainerView from './elements/ContainerView';
import MenuView from './elements/MenuView';
import MenuItemView from './elements/MenuItemView';
import PopupView from './elements/PopupView';
import ArchiveTitleView from './elements/ArchiveTitleView';
import PostContentView from './elements/PostContentView';
import PostExcerptView from './elements/PostExcerptView';
import PostAuthorView from './elements/PostAuthorView';
import PostDateView from './elements/PostDateView';
import LinkListView from './elements/LinkListView';
import AddressView from './elements/AddressView';
import PopoverButtonView from './elements/PopoverButtonView';
import ProductGalleryView from './elements/ProductGalleryView';
import FeatureboxItemView from './elements/FeatureboxItemView';
import FeatureboxView from './elements/FeatureboxView';
import FeatureboxDetailsView from './elements/FeatureboxDetailsView';
import FeatureboxTitleView from './elements/FeatureboxTitleView';
import IconView from './elements/IconView';
import ProductCategoriesView from './elements/ProductCategoriesView';
import ProductTagsView from './elements/ProductTagsView';
import ProductBrandsView from './elements/ProductBrandsView';
import ProductSkuView from './elements/ProductSkuView';
import ProductBadgeView from './elements/ProductBadgeView';
import ProductDiscountView from './elements/ProductDiscountView';
import ProductStockStatusView from './elements/ProductStockStatusView';
import WhatsappButtonView from './elements/WhatsappButtonView';
import MessengerButtonView from './elements/MessengerButtonView';
import CommentsGridView from './elements/CommentsGridView';
import CommentsLoopView from './elements/CommentsLoopView';
import CommentsGridPaginationView from './elements/CommentsGridPaginationView';
import CommentsFormView from './elements/CommentsFormView';
import CommentAvatarView from './elements/CommentAvatarView';
import CommentAuthorView from './elements/CommentAuthorView';
import CommentRateView from './elements/CommentRateView';
import CommentContentView from './elements/CommentContentView';
import ProductPriceView from './elements/ProductPriceView';
import ProductVariablePricesView from './elements/ProductVariablePricesView';
import ProductRatingsView from './elements/ProductRatingsView';
import AddToCartView from './elements/AddToCartView';
import RelatedProductsView from './elements/RelatedProductsView';

import TabsView from './elements/TabsView';
import TabsItemView from './elements/TabsItemView';
import CheckoutView from './elements/CheckoutView';
import CartView from './elements/CartView';
import NotifyView from './elements/NotifyView';
import CustomerAccountLoggedView from './elements/CustomerAccountLoggedView';
import CustomerAccountNotLoggedView from './elements/CustomerAccountNotLoggedView';
import CustomerOrdersView from './elements/CustomerOrdersView';
import CustomerAccountView from './elements/CustomerAccountView';
import CustomerProfileEditView from './elements/CustomerProfileEditView';
import CustomerProfileView from './elements/CustomerProfileView';
import CustomerSubscriptionsView from './elements/CustomerSubscriptionsView';

import LoginByPhoneView from './elements/LoginByPhoneView';
import LoginView from './elements/LoginView';
import RegisterView from './elements/RegisterView';



const BlockRender = (props) => {


	var block = props?.block

	var index = props?.index
	var handleMoveBlock = props?.handleMoveBlock
	var ParentCssSelectors = props?.ParentCssSelectors





	function Preview(type) {

		switch (type) {
			case "heading": return <HeadingView  {...block} index={index} />;
			case "accordionMenu": return <AccordionMenuView  {...block} index={index} />;
			case "termTitle": return <TermTitleView  {...block} index={index} />;
			case "termCount": return <TermCountView  {...block} index={index} />;
			case "termThumbnail": return <TermThumbnailView  {...block} index={index} />;
			case "postLoop": return <PostLoopView  {...block} index={index} />;
			case "termsLoop": return <TermsLoopView  {...block} index={index} />;
			case "postGridPagination": return <PostGridPaginationView  {...block} index={index} />;
			case "postGrid": return <PostGridView  {...block} index={index} />;
			case "termsGrid": return <TermsGridView  {...block} index={index} />;
			case "termsGridPagination": return <TermsGridPaginationView  {...block} index={index} />;
			case "postSlider": return <PostSliderView  {...block} index={index} />;
			case "postTitle": return <PostTitleView  {...block} index={index} />;
			case "postThumbnail": return <PostThumbnailView  {...block} index={index} />;
			case "button": return <ButtonView {...block} index={index} />;
			case "text": return <TextView {...block} index={index} />;
			case "list": return <ListView {...block} index={index} />;
			case "video": return <VideoView {...block} index={index} />;
			case "image": return <ImageView {...block} index={index} />;
			case "logo": return <LogoView {...block} index={index} />;
			case "menu": return <MenuView {...block} index={index} />;
			case "menuItem": return <MenuItemView {...block} index={index} />;
			case "footerLinks": return <FooterLinksView {...block} index={index} />;
			case "siteHeader": return <SiteHeaderView {...block} index={index} />;
			case "siteFooter": return <SiteFooterView {...block} index={index} />;
			case "quickSearch": return <QuickSearchView {...block} index={index} />;
			case "grid": return <GridView {...block} index={index} />;
			case "gridItem": return <GridItemView {...block} index={index} />;
			case "columnItem": return <ColumnItemView {...block} index={index} ParentCssSelectors={ParentCssSelectors} />;
			case "columns": return <ColumnsView {...block} index={index} />;
			case "sidebar": return <SidebarView {...block} index={index} />;
			case "contentSlider": return <ContentSliderView {...block} index={index} />;
			case "termsSlider": return <TermsSliderView {...block} index={index} />;
			case "section": return <SectionView {...block} index={index} />;
			case "container": return <ContainerView {...block} index={index} />;
			case "popup": return <PopupView {...block} index={index} />;
			case "archiveTitle": return <ArchiveTitleView {...block} index={index} />;
			case "archiveDescription": return <ArchiveDescriptionView {...block} index={index} />;
			case "archiveCount": return <ArchiveCountView {...block} index={index} />;
			case "postContent": return <PostContentView {...block} index={index} />;
			case "postExcerpt": return <PostExcerptView {...block} index={index} />;
			case "postAuthor": return <PostAuthorView {...block} index={index} />;
			case "postDate": return <PostDateView {...block} index={index} />;
			case "linkList": return <LinkListView {...block} index={index} />;
			case "productGallery": return <ProductGalleryView {...block} index={index} />;
			case "productCategories": return <ProductCategoriesView {...block} index={index} />;
			case "productTags": return <ProductTagsView {...block} index={index} />;
			case "productBrands": return <ProductBrandsView {...block} index={index} />;
			case "productSku": return <ProductSkuView {...block} index={index} />;
			case "productBadge": return <ProductBadgeView {...block} index={index} />;
			case "productDiscount": return <ProductDiscountView {...block} index={index} />;
			case "productStockStatus": return <ProductStockStatusView {...block} index={index} />;
			case "whatsappButton": return <WhatsappButtonView {...block} index={index} />;
			case "messengerButton": return <MessengerButtonView {...block} index={index} />;
			case "commentsGrid": return <CommentsGridView {...block} index={index} />;
			case "commentsLoop": return <CommentsLoopView {...block} index={index} />;
			case "commentsGridPagination": return <CommentsGridPaginationView {...block} index={index} />;
			case "commentsForm": return <CommentsFormView {...block} index={index} />;
			case "commentAvatar": return <CommentAvatarView {...block} index={index} />;
			case "commentAuthor": return <CommentAuthorView {...block} index={index} />;
			case "commentRate": return <CommentRateView {...block} index={index} />;
			case "commentContent": return <CommentContentView {...block} index={index} />;
			case "productPrice": return <ProductPriceView {...block} index={index} />;
			case "productVariablePrices": return <ProductVariablePricesView {...block} index={index} />;
			case "productRatings": return <ProductRatingsView {...block} index={index} />;
			case "addToCart": return <AddToCartView {...block} index={index} />;
			case "relatedProducts": return <RelatedProductsView {...block} index={index} />;
			case "notify": return <NotifyView {...block} index={index} />;

			case "customerAccountLogged": return <CustomerAccountLoggedView {...block} index={index} />;
			case "customerAccountNotLogged": return <CustomerAccountNotLoggedView {...block} index={index} />;
			case "customerAccount": return <CustomerAccountView {...block} index={index} />;
			case "customerOrders": return <CustomerOrdersView {...block} index={index} />;
			case "customerProfileEdit": return <CustomerProfileEditView {...block} index={index} />;
			case "customerProfile": return <CustomerProfileView {...block} index={index} />;
			case "customerSubscriptions": return <CustomerSubscriptionsView {...block} index={index} />;
			case "customerTickets": return <CustomerTicketsView {...block} index={index} />;

			case "loginByPhone": return <LoginByPhoneView {...block} index={index} />;
			case "login": return <LoginView {...block} index={index} />;
			case "register": return <RegisterView {...block} index={index} />;


			case "cart": return <CartView {...block} index={index} />;
			case "checkout": return <CheckoutView {...block} index={index} />;
			case "tabs": return <TabsView {...block} index={index} />;
			case "tabs": return <TabsView {...block} index={index} />;
			case "tabsItem": return <TabsItemView {...block} index={index} />;
			case "featureboxItem": return <FeatureboxItemView {...block} index={index} />;
			case "featurebox": return <FeatureboxView {...block} index={index} />;
			case "featureboxDetails": return <FeatureboxDetailsView {...block} index={index} />;
			case "featureboxTitle": return <FeatureboxTitleView {...block} index={index} />;
			case "icon": return <IconView {...block} index={index} />;
			case "address": return <AddressView {...block} index={index} />;
			case "popoverButton": return <PopoverButtonView {...block} index={index} />;
			/*
				Not a core type. An active extension may claim it - core is
				checked first, by being a `case` above, so an extension can
				never shadow a core block the way it could if both lived in one
				lookup. A stale block whose extension has been removed falls
				through to the placeholder, as before.
			*/
			default: {
				const Extension = extensionRenderers[type];
				if (Extension) return <Extension {...block} index={index} />;
				return <div style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>[{block.type}]</div>;
			}
		}



	}


	return (
		<>

			{
				Preview(block?.type)

			}


		</>
	);
};



export default BlockRender;
