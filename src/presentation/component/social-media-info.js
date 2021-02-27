import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from '../../abheepsa-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 10
    },
    media: {
        height: 0,
        paddingTop: '69.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function SocialMediaInfo() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="social-media" className={classes.avatar}>
                        AP
                    </Avatar>
                }
                title="Abheepsa Pattnaik"
                subheader="Social Media links"
            />
            <CardMedia
                className={classes.media}
                image={logo}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>User ids</Typography>
                    <Typography paragraph>
                       LinkedIn
                    </Typography>
                    <Typography paragraph>
                       Instagram
                    </Typography>
                    <Typography paragraph>
                       Git
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
