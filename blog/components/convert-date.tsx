import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

type ConvertDateProps = {
  dateISO: string;
};

export default function ConvertDate(props: ConvertDateProps) {
  const { dateISO } = props;

  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
}
