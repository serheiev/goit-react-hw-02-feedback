import { SectionElement } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionElement>
      <h2>{title}</h2>
      {children}
    </SectionElement>
  );
};
