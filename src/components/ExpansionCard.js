import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconAvatars from './iconAvatars';
import Table from './Table';
import Paper from './Paper';

const styles = theme => ({
	cardRed: {
		background: 'rgba(200,0,0, .5)',
	},
	cardOrange: {
		background: orange[300],
	},
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		t: '15%',
		marginTop: '15px',
	},
});

function SimpleExpansionPanel(props) {
	const { classes } = props;

	let objArr = [{ key: 'Muaath' }, { key: 'Sharifah' }];

	let cards = objArr.map(card => (
		<div className={classes.root}>
			<ExpansionPanel className={classes.cardOrange}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>
						<IconAvatars />
					</Typography>
					<Typography className={classes.secondaryHeading}> Error Time </Typography>
				</ExpansionPanelSummary>
				<Table />
				<Paper />
				<ExpansionPanelDetails>
					<Typography> </Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	));
	console.log(cards.key);

	return <div>{cards}</div>;
}

SimpleExpansionPanel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
