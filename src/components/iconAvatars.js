import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Error';
import PageviewIcon from '@material-ui/icons/Warning';
import AssignmentIcon from '@material-ui/icons/Error';

const styles = {
	yellowAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: yellow[600],
		height: '100%',
		width: 'auto',
	},
	pinkAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: red[400],
		height: '100%',
		width: 'auto',
	},
	greenAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: orange[500],
		height: '100%',
		width: 'auto',
	},
	row: {
		display: 'flex',
		justifyContent: 'center',
	},
};

function IconAvatars(props) {
	const { classes } = props;
	return (
		<div className={classes.row}>
			<Avatar className={classes.yellowAvatar}>
				<FolderIcon />
			</Avatar>
			<Avatar className={classes.pinkAvatar}>
				<PageviewIcon />
			</Avatar>
			<Avatar className={classes.greenAvatar}>
				<AssignmentIcon />
			</Avatar>
		</div>
	);
}

IconAvatars.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
