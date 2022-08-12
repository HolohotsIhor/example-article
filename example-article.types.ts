import {MultiPictureDataProps} from 'components/media/media.types';

export type ArticleProps = {
	id: number,
	title: string,
	description: string,
	images: MultiPictureDataProps,
	__component: string,
	cms_component?: string, // eslint disable camelcase
};
