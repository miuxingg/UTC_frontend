import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IBook } from '..';
import MultipleSlider from '../../elements/MultipleSlider';
import BookCard from '../BookCard';

export interface IBookSection {
  listItem: IBook[];
  title: string;
  description: string;
}
const MultipleBookSlider: React.FC<IBookSection> = ({
  listItem,
  title,
  description,
}) => {
  const newTitle = title.split(' ');
  // const data = [...listItem, ...listItem].map((item) => {
  //   return item;
  // });
  const data = [
    listItem[0],
    listItem[1],
    listItem[2],
    listItem[3],
    listItem[4],
    listItem[5],
    listItem[6],
    listItem[7],
    listItem[8],
    listItem[9],
    listItem[10],
    listItem[11],
    listItem[12],
    listItem[13],
    listItem[14],
    listItem[15],
    listItem[16],
    listItem[17],
  ];
  return (
    <section className="wn__product__area brown--color pt--80  pb--30">
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
              <p>{description}</p>
            </div>
          </div>
        </div>
        <Box mt={5}>
          <MultipleSlider>
            {data.map((item, index) => {
              return (
                <Box maxWidth={270} width={270} key={index}>
                  <BookCard {...item} />
                </Box>
              );
            })}
          </MultipleSlider>
        </Box>
      </div>
    </section>
  );
};

export default MultipleBookSlider;
