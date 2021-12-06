import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const Div = styled.div`
padding-bottom: 30px;
`

const Dropdowns = () => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>

          <Menu.Item icon={<DownOutlined />} >
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          </Menu.Item>

          <Menu.Item >
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          </Menu.Item>
        </Menu>
    );

    const menu2 = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>

          <Menu.Item icon={<DownOutlined />} >
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          </Menu.Item>

          <Menu.Item >
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          </Menu.Item>
        </Menu>
    );


    return (
        <Div>

    

            <Dropdown overlay={menu} placement="topLeft">
            <a className="ant-dropdown-link"
            style={{fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '23px', color: '#3B3E44', marginRight:'25px'}}
             onClick={e => e.preventDefault()}>
              Round trip 
               <DownOutlined style={{color:'black', width:'10px', height:'6px', color: '#84878B'}}/>
            </a>
            </Dropdown>

            <Dropdown overlay={menu2} placement="topLeft">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}
            style={{fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '23px', color: '#3B3E44'}}>
              passenger <DownOutlined style={{color:'black', width:'10px', height:'6px', color: '#84878B'}} />
            </a>
            </Dropdown>
            
        </Div>
    )
}

export default Dropdowns
