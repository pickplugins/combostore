import PageBuilderContentClient from './PageBuilderContentClient';
import { IconRegistryProvider } from '../icons/TablerIcon';
import { collectIconNames, iconsData } from '@/lib/icons/iconData';

/*
	A page's blocks (rendered by PageBuilderContentClient), with the drawing
	data of the icons they name, looked up here on the server: the browser
	gets only the icons this page uses instead of the whole Tabler set (see
	components/icons/TablerIcon.jsx).
*/
const PageBuilderContent = ({ blocks }) => {
	var icons = iconsData(collectIconNames(blocks ?? []));
	return (
		<IconRegistryProvider icons={icons}>
			<PageBuilderContentClient blocks={blocks} />
		</IconRegistryProvider>
	);
};

export default PageBuilderContent;
