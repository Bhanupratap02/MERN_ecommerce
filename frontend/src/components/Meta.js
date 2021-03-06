import {Helmet} from "react-helmet"
import React from 'react'

const Meta = ({title , description , keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={keywords}
      />
    </Helmet>
  );
}


 Meta.defaultProps = {
   title: "Welcome to Shoper",
   description:"We sell the best product for cheap",
   keywords:" electronic , buy electronics , chep elctronics"

 };
export default Meta