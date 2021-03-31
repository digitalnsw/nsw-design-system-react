import React from 'react';
import Table, {TableBody, TableCaption, TableCell, TableResponsiveWrapper} from "./table";


export default {
    title: 'Content/Table',
    component: Table,
};
const simpleHeaders = [
    {title: "First Name", key: "fname", width: '50'},
    {title: "Last Name", key: "lname", width: '25'},
    {title: "Email", key: "email", width: '25'}

];

const simpleData = [
    {fname: "Coco", lname: "Cat", email: "coco.cat@email.com"},
    {fname: "Bonnie", lname: "Cat", email: "jane.cat@email.com"},
    {fname: "Matthew", lname: "Cat", email: "matthew.cat@email.com"}
];


const Template = (args) => <Table {...args}/>

const ResponsiveTemplate = (args) => (
    <TableResponsiveWrapper>
        <Table {...args}
        />
    </TableResponsiveWrapper>
);

export const Default = Template.bind({});
Default.args = {
    caption: 'User record',
    headers: simpleHeaders,
    data: simpleData,
};

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {
    caption: 'User record',
    headers: simpleHeaders,
    data: simpleData,
};

export const Bordered = Template.bind({});
Bordered.args = {
    caption: 'User record',
    headers: simpleHeaders,
    bordered: true,
    data: simpleData,
};

export const Striped = Template.bind({});
Striped.args = {
    caption: 'Population of Australian states and territories, December 2015',
    headers: simpleHeaders,
    striped: true,
    data: simpleData,
};

export const CaptionTop = Template.bind({});
CaptionTop.args = {
    caption: 'Population of Australian states and territories, December 2015',
    headers: simpleHeaders,
    captionTop: true,
    data: simpleData,
};