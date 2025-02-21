import { TextWrapper } from '@/components/data-sections/text-wrapper';

export default function WhatItIs() {
  return (
    <TextWrapper
      title="What is Overmolding?"
      description="Overmolding is an injection molding process where you mold one
      material over top of another material or substrate."
      image="https://zetarmold.com/wp-content/uploads/2024/05/Overmolding1.jpg"
      imagePosition="left"
    >
      <p>
        The first material is usually made of a different material or has a
        different shape than the second material. Overmolding is used in many
        industries including medical devices, automotive, aerospace, and
        consumer products.
      </p>
      <p>
        To overmold, you first mold or make the first part. Then you mold the
        second material over top of the first part. The second material can be a
        different plastic, rubber, or other material that gives the part special
        properties like flexibility, durability, or looks.
      </p>
    </TextWrapper>
  );
}
