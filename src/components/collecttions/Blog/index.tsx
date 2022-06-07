import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from 'reactstrap';
import Image from 'next/image';

interface IBlog {
  title: string;
  image: string;
  subtitle?: string;
  text: string;
  color?: string;
}
const Blog: React.FC<IBlog> = ({ image, title, subtitle, text, color }) => {
  return (
    <Card>
      <img alt="Card image cap" src={image} />
      <CardBody className="p-4" style={{ height: '250px' }}>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText
          className="mt-3"
          style={{ height: '96px', overflow: 'hidden' }}
        >
          {text}
        </CardText>
        {/* <Button color={color}>Read More</Button> */}
      </CardBody>
    </Card>
  );
};
export default Blog;
