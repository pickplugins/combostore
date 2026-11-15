import PageBuilderContentClient from './PageBuilderContentClient';
import { IconRegistryProvider } from '../icons/TablerIcon';
import { collectIconNames, iconsData } from '@/lib/icons/iconData';

/*
	A page's blocks (rendered by PageBuilderContentClient), with the drawing
	data of the icons they name, looked up here on the server: the browser
	gets only the icons this page uses instead of the whole Tabler set (see
	components/icons/TablerIcon.jsx).

	`children`, when a route passes any, render inside <main> after the page's
	blocks and before the footer (the thank-you page's order).
*/
const PageBuilderContent = ({ blocks, children }) => {
	var icons = iconsData(collectIconNames(blocks ?? []));
	return (
		<IconRegistryProvider icons={icons}>
			<PageBuilderContentClient blocks={blocks}>{children}</PageBuilderContentClient>
		</IconRegistryProvider>
	);
};

export default PageBuilderContent;
