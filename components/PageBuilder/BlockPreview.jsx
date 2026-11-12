import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconFileDollar, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import ElementOptions from './ElementOptions';
import ElementStyles from './ElementStyles';
import registry from '../../extensions';
import { useExtensionsStore } from '../../store/useExtensionsStore';


import Login from './elements/Login';
import LoginByPhone from './elements/LoginByPhone';
import Register from './elements/Register';
import Heading from './elements/Heading';
import TermTitle from './elements/TermTitle';
import TermCount from './elements/TermCount';
import TermThumbnail from './elements/TermThumbnail';
import Button from './elements/Button';
import Text from './elements/Text';
import List from './elements/List';
import Video from './elements/Video';
import ContentSlider from './elements/ContentSlider';
import TermsSlider from './elements/TermsSlider';
import PostGrid from './elements/PostGrid';
import TermsGrid from './elements/TermsGrid';
import TermsGridPagination from './elements/TermsGridPagination';
import TermsLoop from './elements/TermsLoop';
import PostLoop from './elements/PostLoop';
import PostGridPagination from './elements/PostGridPagination';
import PostSlider from './elements/PostSlider';

import Image from './elements/Image';
import Logo from './elements/Logo';
import LinkList from './elements/LinkList';
import SiteHeader from './elements/SiteHeader';
import SiteFooter from './elements/SiteFooter';
import Input from './elements/Input';
import Select from './elements/Select';
import QuickSearch from './elements/QuickSearch';
import Grid from './elements/Grid';
import GridItem from './elements/GridItem';
import ColumnItem from './elements/ColumnItem';
import Columns from './elements/Columns';
import Sidebar from './elements/Sidebar';
import Section from './elements/Section';
import Container from './elements/Container';
import Menu from './elements/Menu';
import MenuItem from './elements/MenuItem';
import Popup from './elements/Popup';
import RelatedProducts from './elements/RelatedProducts';
import ProductQuickView from './elements/ProductQuickView';
// import Comments from './elements/Comments';
// import CommentsForm from './elements/CommentsForm';
// import CommentsList from './elements/CommentsList';


import CommentsGrid from './elements/CommentsGrid';
import CommentsLoop from './elements/CommentsLoop';
import CommentAuthor from './elements/CommentAuthor';
import CommentsForm from './elements/CommentsForm';
import CommentContent from './elements/CommentContent';
import CommentAvatar from './elements/CommentAvatar';
import CommentRate from './elements/CommentRate';
import CommentsGridPagination from './elements/CommentsGridPagination';


import CustomerAccount from './elements/CustomerAccount';
import CustomerOrders from './elements/CustomerOrders';
import CustomerProfile from './elements/CustomerProfile';
import CustomerProfileEdit from './elements/CustomerProfileEdit';
import CustomerTickets from './elements/CustomerTickets';
import CustomerSubscriptions from './elements/CustomerSubscriptions';
import CustomerAccountLogged from './elements/CustomerAccountLogged';
import CustomerAccountNotLogged from './elements/CustomerAccountNotLogged';





import WhatsappButton from './elements/WhatsappButton';
import MessengerButton from './elements/MessengerButton';
import ProductCategories from './elements/ProductCategories';
import ProductTags from './elements/ProductTags';
import ProductBrands from './elements/ProductBrands';
import ProductSku from './elements/ProductSku';
import ProductUpsells from './elements/ProductUpsells';
import ProductCrosssells from './elements/ProductCrosssells';
import ProductGallery from './elements/ProductGallery';
import RequestForStock from './elements/RequestForStock';
import Tabs from './elements/Tabs';
import TabsItem from './elements/TabsItem';
import Accordion from './elements/Accordion';
import AccordionItem from './elements/AccordionItem';
import Icon from './elements/Icon';
import Popover from './elements/Popover';
import PopoverButton from './elements/PopoverButton';
import ArchiveTitle from './elements/ArchiveTitle';
import ArchiveDescription from './elements/ArchiveDescription';
import ArchiveCount from './elements/ArchiveCount';
import Cart from './elements/Cart';


import PostContent from './elements/PostContent';
import PostTitle from './elements/PostTitle';
import PostThumbnail from './elements/PostThumbnail';
import PostExcerpt from './elements/PostExcerpt';
import PostAuthor from './elements/PostAuthor';
import PostDate from './elements/PostDate';
import Collections from './elements/Collections';
import CollectionsField from './elements/CollectionsField';
import Featurebox from './elements/Featurebox';
import FeatureboxTitle from './elements/FeatureboxTitle';
import FeatureboxDetails from './elements/FeatureboxDetails';
import Address from './elements/Address';
import AddToCart from './elements/AddToCart';
import ProductRatings from './elements/ProductRatings';
import ProductBadge from './elements/ProductBadge';
import ProductDiscount from './elements/ProductDiscount';
import ProductPrice from './elements/ProductPrice';
import ProductVariations from './elements/ProductVariations';
import ProductStockStatus from './elements/ProductStockStatus';
import AccordionMenu from './elements/AccordionMenu';
import Notify from './elements/Notify';


const BlockPreview = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var block = props?.block
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var handleMoveBlock = props?.handleMoveBlock
	var ParentCssSelectors = props?.ParentCssSelectors

	/* Block renderers contributed by the active extensions. Hydration of the
		 stored on/off overrides is driven by Sidebar and PageBuilder; this only
		 reads the result. */
	const activeExtensionIds = useExtensionsStore((s) => s.activeIds);
	const extensionRenderers = React.useMemo(
		() => registry.elementRenderers(activeExtensionIds),
		[activeExtensionIds]
	);





	function Preview(type) {





		const elementTypes = {
			login: Login,
			loginByPhone: LoginByPhone,
			register: Register,
			heading: Heading,
			termTitle: TermTitle,
			termCount: TermCount,
			termThumbnail: TermThumbnail,
			postLoop: PostLoop,
			termsLoop: TermsLoop,
			postGridPagination: PostGridPagination,
			postGrid: PostGrid,
			termsGrid: TermsGrid,
			termsGridPagination: TermsGridPagination,
			postSlider: PostSlider,
			postTitle: PostTitle,
			postThumbnail: PostThumbnail,
			button: Button,
			text: Text,
			list: List,
			video: Video,
			image: Image,
			logo: Logo,
			menu: Menu,
			menuItem: MenuItem,
			linkList: LinkList,
			siteHeader: SiteHeader,
			siteFooter: SiteFooter,
			input: Input,
			select: Select,
			quickSearch: QuickSearch,
			grid: Grid,
			gridItem: GridItem,
			columnItem: ColumnItem,
			columns: Columns,
			sidebar: Sidebar,
			contentSlider: ContentSlider,
			termsSlider: TermsSlider,
			section: Section,
			container: Container,
			popup: Popup,
			/* The type is relatedProducts; only the snake-case key was registered, so the canvas drew nothing. The old key is kept as an alias. */
			relatedProducts: RelatedProducts,
			related_products: RelatedProducts,
			productQuickView: ProductQuickView,
			// commentsForm: CommentsForm,
			// comments: Comments,
			// commentsList: CommentsList,

			commentsGrid: CommentsGrid,
			commentsLoop: CommentsLoop,
			commentAuthor: CommentAuthor,
			commentContent: CommentContent,
			commentAvatar: CommentAvatar,
			/* Had no entry, so the builder drew nothing for comment ratings. */
			commentRate: CommentRate,
			commentsForm: CommentsForm,
			commentsGridPagination: CommentsGridPagination,


			customerAccount: CustomerAccount,
			customerAccountNotLogged: CustomerAccountNotLogged,
			customerAccountLogged: CustomerAccountLogged,


			customerOrders: CustomerOrders,
			customerProfile: CustomerProfile,
			customerProfileEdit: CustomerProfileEdit,
			customerTickets: CustomerTickets,
			customerSubscriptions: CustomerSubscriptions,



			whatsappButton: WhatsappButton,
			messengerButton: MessengerButton,
			productCategories: ProductCategories,
			productTags: ProductTags,
			productBrands: ProductBrands,
			productSku: ProductSku,
			productUpsells: ProductUpsells,
			productCrosssells: ProductCrosssells,
			productGallery: ProductGallery,
			requestForStock: RequestForStock,
			tabs: Tabs,
			tabsItem: TabsItem,
			accordion: Accordion,
			accordionItem: AccordionItem,
			popover: Popover,
			popoverButton: PopoverButton,
			archiveTitle: ArchiveTitle,
			archiveDescription: ArchiveDescription,
			archiveCount: ArchiveCount,
			cart: Cart,
			icon: Icon,
			postContent: PostContent,
			postExcerpt: PostExcerpt,
			postAuthor: PostAuthor,
			postDate: PostDate,
			collections: Collections,
			collectionsField: CollectionsField,
			featurebox: Featurebox,
			featureboxTitle: FeatureboxTitle,
			featureboxDetails: FeatureboxDetails,
			addToCart: AddToCart,
			productRatings: ProductRatings,
			productBadge: ProductBadge,
			productDiscount: ProductDiscount,
			productPrice: ProductPrice,
			productVariations: ProductVariations,
			/* The old name of productVariations, for blocks saved under it. */
			productVariablePrices: ProductVariations,
			productStockStatus: ProductStockStatus,
			accordionMenu: AccordionMenu,
			address: Address,
			notify: Notify,
		};

		// Hello

		/*
			Core's map first, then the active extensions'.

			Looked up in that order so a core type always wins: an extension
			cannot take over the rendering of a block the page already uses, and
			a stale block whose extension has been switched off falls through to
			the not-registered branch below rather than rendering something else.
		*/
		const Component = elementTypes[type] ?? extensionRenderers[type];
		if (Component) {
			if (block?.type) {
				return <Component {...block} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} index={index} handleMoveBlock={handleMoveBlock} ParentCssSelectors={ParentCssSelectors} />;
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



export default BlockPreview;
