import dayjs from 'dayjs';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { IBlogApi } from '../../../libs/apis/blog/types';
import Blog from '../../collecttions/Blog';
import BlogCard from './BlogCard';
interface IOurBlog {
  blogList: IBlogApi[];
  title: string;
}
export const OurBlog: React.FC<IOurBlog> = ({ blogList, title }) => {
  const newTitle = title.split(' ');
  return (
    <section className="wn__recent__post bg--gray ptb--80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title text-center">
              <h2 className="title__be--2">
                {newTitle.slice(0, Math.ceil(newTitle.length / 2)).join(' ')}{' '}
                <span className="color--theme">
                  {newTitle
                    .slice(Math.ceil(newTitle.length / 2), newTitle.length)
                    .join(' ')}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt--50">
          <Row style={{ justifyContent: 'center' }}>
            {blogList.map((blg) => (
              <Col
                sm="6"
                lg="6"
                xl="3"
                key={blg.id}
                style={{ height: '400px', overflow: 'hidden' }}
              >
                <Blog
                  image={blg.image}
                  title={blg.title}
                  subtitle={dayjs(blg.createdAt).format('DD/MM/YYYY')}
                  text={blg.content}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
