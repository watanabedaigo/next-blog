import { HTMLReactParserOptions, Element } from "html-react-parser";
import parse from "html-react-parser";
import Image from "next/legacy/image";

type ConvertBodyProps = {
  contentHTMl: string;
};

export default function ConvertBody(props: ConvertBodyProps) {
  const { contentHTMl } = props;

  const contentReact: HTMLReactParserOptions = {
    replace: (domNode) => {
      const typedDomNode = domNode as Element;

      if (typedDomNode.attribs && typedDomNode.name === "img") {
        const { src, width, height, alt } = typedDomNode.attribs;
        const widthNum = Number(width);
        const heightNum = Number(height);

        return (
          <Image
            src={src}
            width={widthNum}
            height={heightNum}
            alt={alt}
            layout="responsive"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  };

  return <>{parse(contentHTMl, contentReact)}</>;
}
