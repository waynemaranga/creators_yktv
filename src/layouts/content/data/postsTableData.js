/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
// add thumbnails for the videos here via variables
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  // review const definitions. TODO: define new functionality here
  const Post = ({ thumbnail, title, length }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={thumbnail} name={title} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {title}
        </MDTypography>
        <MDTypography variant="caption">{length}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Category = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      // table headers and accessors
      // snake case used for accessors
      { Header: "info", accessor: "info", width: "45%", align: "left" },
      { Header: "category", accessor: "category", align: "left" }, // defined by list of categories. Variable here should be carried over
      { Header: "monetized", accessor: "monetized", align: "center" },
      { Header: "upload date", accessor: "upload_date", align: "center" },
      { Header: "views", accessor: "views", align: "center" },
      { Header: "likes/dislikes", accessor: "likes_dislikes", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        info: (
          // should be variables based on metadata
          <Post thumbnail={team2} title="Inside a Studio Apartment in Kileleshwa" length="10:00" />
        ),
        category: <Category title="Art" description="Video" />, // title: Genre, description: Podcast or Video
        monetized: (
          // badge content can be video, dependent on monetization
          // badge should have link to specific monetization page for specific video
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          // should be variable based on video's metadata
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          // variables
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        info: (
          <Post
            thumbnail={team3}
            title="Female-Only Student Hostel in Parklands
        "
            length="10:00"
          />
        ),
        category: <Category title="Comedy" description="Podcast" />,
        monetized: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        info: (
          <Post
            thumbnail={team4}
            title="Modern Family Size Apartment in Westlands"
            length="10:00"
          />
        ),
        category: <Category title="Documentary" description="Video" />,
        monetized: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },

      {
        info: <Post thumbnail={team3} title="Inside Waiyaki Way's New Apartments" length="10:00" />,
        category: <Category title="Health" description="Podcast" />,
        monetized: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        info: <Post thumbnail={team4} title="Inside a Townhouse in Loresho" length="10:00" />,
        category: <Category title="Tech" description="Video" />,
        monetized: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        info: <Post thumbnail={team4} title="Cheapest Family Home in Kileleshwa" length="10:00" />,
        category: <Category title="Religion" description="Podcast" />,
        monetized: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        views: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1,119
          </MDTypography>
        ),
        likes_dislikes: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1155/195
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
