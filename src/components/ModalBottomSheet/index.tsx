import React from 'react';
import {StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

type Props = BottomSheetProps &  {
  ref: React.Ref<BottomSheetMethods>
  children: React.ReactNode;
}

const ModalBottomSheetmodal = ({children, ref, ...rest}: Props) => {
  return (
    <BottomSheet
      ref={ref}
      backgroundStyle={styles.bottomShert}
      handleIndicatorStyle={{ backgroundColor: '#fff' }}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}  
      </TouchableWithoutFeedback>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomShert: {
    backgroundColor: '#000000',
    opacity: 0.7
  }
})

export default ModalBottomSheetmodal
