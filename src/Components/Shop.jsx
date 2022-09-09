import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Products from './Products';
import { useParams } from 'react-router-dom';

export default function Shop() {
  var {mc,sc,br}=useParams()
  return (
    <div className='container-fluid'>
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}>
        <h5 className='background text-light text-center p-2'>Menu</h5>
          <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
              <h5 className='background text-center text-light p-1'>Maincategory</h5>
              <List>
                <ListItem disablePadding component="a" href={`/shop/All/${sc}/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="All" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/Male/${sc}/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Male" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/Female/${sc}/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Female" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/Kids/${sc}/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Kids" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
              <h5 className='background text-center text-light p-1'>Subcategory</h5>
              <List>
              <ListItem disablePadding component="a" href={`/shop/${mc}/All/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="All" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/All/Jeans/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Jeans" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/All/Tshirt/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Tshirt" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/All/Shirt/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Shirt" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/All/Trouser/${br}`}>
                  <ListItemButton>
                    <ListItemText primary="Trouser" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
              <h5 className='background text-center text-light p-1'>Brand</h5>
              <List>
              <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/All`}>
                  <ListItemButton>
                    <ListItemText primary="All" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Adidas`}>
                  <ListItemButton>
                    <ListItemText primary="Adidas" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Mufti`}>
                  <ListItemButton>
                    <ListItemText primary="Mufti" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Tommy Hilfiger`}>
                  <ListItemButton>
                    <ListItemText primary="Tommy Hilfiger" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Gucci`}>
                  <ListItemButton>
                    <ListItemText primary="Gucci" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Zara`}>
                  <ListItemButton>
                    <ListItemText primary="Zara" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding component="a" href={`/shop/${mc}/${sc}/Nike`}>
                  <ListItemButton>
                    <ListItemText primary="Nike" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item md={10} xs={12}>
        <h5 className='background text-light text-center p-2'>Shop Section</h5>
          <Products mc={mc} sc={sc} br={br} />
        </Grid>
      </Grid>
    </div>
  )
}
