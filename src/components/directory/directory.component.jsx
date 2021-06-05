import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './directory.styles.scss';
import {selectDirectorySection} from '../../redux/directory/directory.selector'

const Directory = ({sections})=> {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapstatetoprops = createStructuredSelector({
  sections:selectDirectorySection
}
)

export default connect(mapstatetoprops)(Directory) ;
