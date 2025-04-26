import { useState } from 'react';
import { Drawer, Box, Typography, IconButton, Divider, List, ListItem, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Image from 'next/image';

interface UserDrawerProps {
  open: boolean;
  onClose: () => void;
}

const UserDrawer = ({ open, onClose }: UserDrawerProps) => {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    'New Cars': false,
    'Used Cars': false,
    'More': false,
    'UAE': false,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '314px',
          bgcolor: 'white',
          height: '100%',
          overflowY: 'auto'
        },
      }}
    >
      <Box sx={{ p: 0 }}>
        {/* Header with Login/Register */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          p: 1,
          
          bgcolor: '#f8f9fa' ,
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center',px: 2.5, }}>
            <Link href="/login" className="text-[#124D99] text-[14px] font-medium hover:text-[#0a58ca]">
              Login
            </Link>
            <span className="text-gray-400 mx-2">|</span>
            <Link href="/register" className="text-[#124D99] text-[14px] font-medium hover:text-[#0a58ca]">
              Register
            </Link>
          </Box>
          <IconButton onClick={onClose} size="small" sx={{ ml: 4 }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Sell My Car with FREE tag */}
        <Box sx={{ px: 3.5, py: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1.3, cursor: 'pointer', px: 0, gap: 1}}>
            <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px", }}>
              Sell My Car
            </Typography>
            <Box sx={{ 
              bgcolor: '#0d6efd', 
              px: 1, 
              py: 0.2, 
              borderRadius: 1, 
              color: 'white',
              fontSize: '10px', 
              fontWeight: 'bold' 
            }}>
              FREE
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* Navigation List */}
        <List sx={{ p: 0, pt: 0.5,px: 2 }}>
          {/* New Cars (Collapsible) */}
          <ListItem 
            onClick={() => toggleCategory('New Cars')}
            sx={{ py: 1.3, cursor: 'pointer', px: 1, '&:hover': { backgroundColor: '#f8f9fa', borderRadius: '9px' } }}
          >
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              {expandedCategories['New Cars'] ? 
                <KeyboardArrowDownIcon fontSize="small" /> : 
                <KeyboardArrowRightIcon fontSize="small" />
              }
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                New Cars
              </Typography>
            </Box>
          </ListItem>
          <Collapse in={expandedCategories['New Cars']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Sub-items could go here */}
            </List>
          </Collapse>
          
          {/* Used Cars (Collapsible) */}
          <ListItem 
            onClick={() => toggleCategory('Used Cars')}
            sx={{ py: 1.3, cursor: 'pointer', px: 1, '&:hover': { backgroundColor: '#f8f9fa', borderRadius: '9px' } }}
          >
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              {expandedCategories['Used Cars'] ? 
                <KeyboardArrowDownIcon fontSize="small" /> : 
                <KeyboardArrowRightIcon fontSize="small" />
              }
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Used Cars
              </Typography>
            </Box>
          </ListItem>
          <Collapse in={expandedCategories['Used Cars']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Sub-items could go here */}
            </List>
          </Collapse>

            {/* Electric Cars */}
            <ListItem    sx={{ py: 1.3, cursor: 'pointer', px: 2, '&:hover': { backgroundColor: '#f8f9fa', borderRadius: '9px' } }}>
            <Link href="/electric-cars" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Electric Cars
              </Typography>
            </Link>
          </ListItem>

          {/* Chinese Cars */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/chinese-cars" className="w-full">
              <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
                <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                  Chinese Cars
                </Typography>
                <Box sx={{ 
                  bgcolor: '#ff0000', 
                  px: 1, 
                  py: 0.2, 
                  borderRadius: 1, 
                  color: 'white',
                  fontSize: '10px', 
                  fontWeight: 'bold' 
                }}>
                  New
                </Box>
              </Box>
            </Link>
          </ListItem>

          {/* Offers */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/offers" className="w-full">
              <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
                <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                  Offers
                </Typography>
                <Box sx={{ 
                  bgcolor: '#ff0000', 
                  px: 1, 
                  py: 0.2, 
                  borderRadius: 1, 
                  color: 'white',
                  fontSize: '10px', 
                  fontWeight: 'bold' 
                }}>
                  New
                </Box>
              </Box>
            </Link>
          </ListItem>
        </List>

        <Divider />

        {/* Services */}
        <List sx={{ p: 0, pt: 0.5,px: 2 }}>
          {/* Vehicle Report */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/vehicle-report" className="w-full">
              <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
                <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                  Vehicle Report
                </Typography>
                <Box sx={{ 
                  bgcolor: '#ff0000', 
                  px: 1, 
                  py: 0.2, 
                  borderRadius: 1, 
                  color: 'white',
                  fontSize: '10px', 
                  fontWeight: 'bold' 
                }}>
                  New
                </Box>
              </Box>
            </Link>
          </ListItem>

          {/* Car Valuation */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/car-valuation" className="w-full">
              <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
                <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                  Car Valuation
                </Typography>
                <Box sx={{ 
                  bgcolor: '#ff0000', 
                  px: 1, 
                  py: 0.2, 
                  borderRadius: 1, 
                  color: 'white',
                  fontSize: '10px', 
                  fontWeight: 'bold' 
                }}>
                  New
                </Box>
              </Box>
            </Link>
          </ListItem>

          {/* Car Export */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/car-export" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Car Export
              </Typography>
            </Link>
          </ListItem>

          {/* Car Inspection */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/car-inspection" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Car Inspection
              </Typography>
            </Link>
          </ListItem>

          {/* Car Financing */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/car-financing" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Car Financing
              </Typography>
            </Link>
          </ListItem>
        </List>

        <Divider />

        {/* Content */}
        <List sx={{ p: 0, pt: 0.5,px: 2 }}>
          {/* Blog */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/blog" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Blog
              </Typography>
            </Link>
          </ListItem>

          {/* Car Videos */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/car-videos" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Car Videos
              </Typography>
            </Link>
          </ListItem>

          {/* Expert Car Ratings */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'} }}>
            <Link href="/expert-car-ratings" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                Expert Car Ratings
              </Typography>
            </Link>
          </ListItem>

          {/* More (Collapsible) */}
          <ListItem 
            onClick={() => toggleCategory('More')}
            sx={{ py: 1.5, cursor: 'pointer', px: 1, '&:hover': { backgroundColor: '#f8f9fa', borderRadius: '9px' } }}
          >
            <Box sx={{ display: 'flex',  width: '100%', alignItems: 'center' }}>
              {expandedCategories['More'] ? 
                <KeyboardArrowDownIcon fontSize="small" /> : 
                <KeyboardArrowRightIcon fontSize="small" />
              }
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                More
              </Typography>
            </Box>
          </ListItem>
        </List>

        <Divider />

        {/* Language & Country */}
        <List sx={{ p: 0, pt: 0.5,px: 2 }}>
          {/* UAE (Collapsible) */}
          <ListItem 
            onClick={() => toggleCategory('UAE')}
            sx={{ py: 1.5, cursor: 'pointer', px: 1, '&:hover': { backgroundColor: '#f8f9fa', borderRadius: '9px' } }}
          >
                <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {expandedCategories['UAE'] ? 
                      <KeyboardArrowDownIcon fontSize="small" /> : 
                      <KeyboardArrowRightIcon fontSize="small" />
                    }
                <Box sx={{ width: 22, height: 15, position: 'relative' }}>
                  <Image
                    src="/images/flags/uae.svg"
                    alt="UAE flag"
                    fill
                    className="object-cover"
                  />
                </Box>
                <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                  UAE
                </Typography>
              </Box>
            </Box>
          </ListItem>

          {/* Arabic */}
          <ListItem sx={{ py: 1.5, px: 2, '&:hover': { backgroundColor: '#f8f9fa' , borderRadius: '9px'     } }}>
            <Link href="/ar" className="w-full">
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize:"14px" }}>
                العربية
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default UserDrawer; 