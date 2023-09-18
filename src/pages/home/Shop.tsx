import React from "react";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsCaretDown, BsFilter } from "react-icons/bs";
import IconText from "../../components/IconText";

const Shop = () => {
  return (
    <Section>
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex justify-between items-center gap-4">
            <IconText Symbol={BsFilter}>Filter</IconText>
            <IconText Symbol={BsCaretDown} className="flex-row-reverse">
              Featured
            </IconText>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Shop;
