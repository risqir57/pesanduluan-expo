import RNDateTimePicker, {
  IOSNativeProps,
  AndroidNativeProps,
} from "@react-native-community/datetimepicker";
import * as React from "react";
import useThemeColors from "@src/hooks/useThemeColors";

type DateTimePickerProps = IOSNativeProps | AndroidNativeProps;

const DateTimePicker: React.FC<DateTimePickerProps> = (props) => {
  const { text } = useThemeColors();
  return <RNDateTimePicker {...props} textColor={text} />;
};

export default DateTimePicker;
