'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconLogout } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { useAuth } from "../../../components/auth-context";
import { useCounterStore } from '../../../store/useCounterStore'
import Image from "next/image";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The storefront's account area: a welcome card with a log-out button for a
	signed-in customer (hidden with options.hideWelcome), then the child blocks
	(usually customerAccountNotLogged and customerAccountLogged).
*/
const CustomerAccountView = (props) => {
	const { index, id, type } = props;
	const { handleLogout } = useAuth();

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};
	/* Each part's classes; a key the block lacks falls back to the customerAccount defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerAccount', cssSelectors);

	const { userDataX } = useCounterStore()

	return (
		<div id={id} type={type} className={cls('*')}>

			{userDataX && !props?.options?.hideWelcome && (
				<div className={cls('welcome')}>

					<div className={cls('welcome-profile')}>
						<div className={cls('avatar')}>
							{userDataX?.avatar ? (
								<Image className={cls('avatar-image')} src={userDataX.avatar} width={112} height={112} alt={userDataX?.name ?? ''} />
							) : (
								/* No photo: the first letter of their name instead of a broken image. */
								<span className={cls('avatar-initial')}>
									{String(userDataX?.name || '?').trim().charAt(0).toUpperCase()}
								</span>
							)}
						</div>

						<div className={cls('welcome-text')}>
							<div className={cls('welcome-greeting')}>Welcome back,</div>
							<div className={cls('welcome-name')}>{userDataX?.name}</div>
							{userDataX?.email && <div className={cls('welcome-email')}>{userDataX.email}</div>}
						</div>
					</div>

					<button
						type="button"
						className={cls('logout-button')}
						onClick={() => handleLogout()}
					>
						<IconLogout size={16} />
						Log out
					</button>

				</div>
			)}

			{
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}
					/>
				))
			}
		</div>
	);
};

CustomerAccountView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default CustomerAccountView;
