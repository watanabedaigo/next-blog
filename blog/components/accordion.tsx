import { ReactNode, useState, useRef } from "react";
import styles from "styles/accordion.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

type AccordionProps = {
  heading: string;
  children: ReactNode;
};

export default function Accordion(props: AccordionProps) {
  const { heading, children } = props;

  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const txtWrapperObj = useRef();

  const setTxtWrapperHeight = () => {
    const txtWrapper = txtWrapperObj.current;
    const txtHeght = txtWrapper.querySelector("div").clientHeight;
    txtWrapper.style.setProperty("--txtHeight", `${txtHeght}px`);
  };

  const handleAccordionToggle = () => {
    setTxtWrapperHeight();
    setAccordionIsOpen(!accordionIsOpen);
  };

  return (
    <div
      className={
        accordionIsOpen ? `${styles.wrapper} ${styles.open}` : styles.wrapper
      }
    >
      <h3 className={styles.ttl}>
        <button className={styles.btn} onClick={handleAccordionToggle}>
          {heading}
          <FontAwesomeIcon
            icon={accordionIsOpen ? faCircleChevronUp : faCircleChevronDown}
            className={styles.icon}
          />
        </button>
      </h3>
      <div className={styles.txt__wrapper} ref={txtWrapperObj}>
        <div className={styles.txt}>{children}</div>
      </div>
    </div>
  );
}
