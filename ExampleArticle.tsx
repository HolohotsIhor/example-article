import React, {ReactElement} from 'react';
import Grid from '@front/ui/dist/Grid';
import '@front/ui/dist/Grid.css';
import Title from '@front/ui/dist/Title';
import '@front/ui/dist/Title.css';
import Text from '@front/ui/dist/Text';
import '@front/ui/dist/Text.css';
import {Section} from 'shared/ui/section/components/Section';
import {ImageResolver} from 'components/media/ImageResolver';
import {ArticleProps} from './example-article.types';
import {
	optionInner,
	optionsHeading,
	optionsTitle,
} from './configs/layout';
import './Article.styl';

export function Article(props: ArticleProps): ReactElement {
	const {
		title,
		description,
		images,
	} = props;

	return (
		<Section classNames={{section: 'example-article', content: 'example-article__inner'}}>
			<Grid options={optionInner}>
				<Grid options={optionsHeading}>
					<Grid options={optionsTitle}>
						<Grid>
							<Title>
								{title}
							</Title>
						</Grid>
					</Grid>
				</Grid>
				<Grid options={optionsHeading}>
					<Grid>
						<Text className="example-article__description">
							{description}
						</Text>
					</Grid>
				</Grid>
			</Grid>
			<div className="example-article__image-wrapper">
				<ImageResolver
					imageClassName="example-article__image"
					images={images}
				/>
			</div>
		</Section>
	);
}
