import React, {FunctionComponent} from 'react';
import {FlatList, View} from 'react-native';
import {GlobalStyles} from '../../utils/globalStyles';
import PNGIMAGE from '../images/pngImage';
import TextComponent from '../text';

type Props = {
  chapterIcon: string;
  chapterName: string;
  data: any;
  renderItem: any;
};

const ChapterList: FunctionComponent<Props> = props => {
  const {chapterIcon, chapterName, data, renderItem} = props;
  return (
    <>
      <View style={[GlobalStyles.marginBottom18, GlobalStyles.fullCenter]}>
        <PNGIMAGE
          imageURl={chapterIcon}
          imageViewStyle={[
            {width: 80, height: 80},
            GlobalStyles.borderRadius0,
            GlobalStyles.viewSelfCenter,
            GlobalStyles.marginBottom14,
          ]}
          imageStyle={[
            {width: '100%', height: '100%'},
            GlobalStyles.borderRadius0,
          ]}
          fromApi={true}
        />
        <TextComponent text={chapterName} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={[
          GlobalStyles.borderRadius20,
          GlobalStyles.paddingHorizontal14,
          GlobalStyles.paddingVeritcal14,
          GlobalStyles.mischkaBackground,
          GlobalStyles.marginBottom16,
        ]}
        contentContainerStyle={[GlobalStyles.rowSpaceBetween]}
        numColumns={2}
      />
    </>
  );
};

export default ChapterList;
