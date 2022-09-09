import React, { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BlogProps {
    id?: number;
    image: string;
    title: string;
    desc: string;
}
export const BlogCard: FC<BlogProps> = ({ image, title, desc }) => {
    return (
        <Card sx={{ minWidth: 250 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200px"
                image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
