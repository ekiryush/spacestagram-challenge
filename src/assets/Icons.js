import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

export const unfilledHeart = (
    <FontAwesomeIcon className="text-white" icon={farFaHeart} aria-hidden="true" data-testid="unfilled-heart" />
);
export const filledHeart = (
    <FontAwesomeIcon className="text-red-200" icon={fasFaHeart} aria-hidden="true" data-testid="filled-heart" />
);
export const link = <FontAwesomeIcon className="text-white" icon={faLink} aria-hidden="true" />;
export const share = <FontAwesomeIcon className="text-white" icon={faShareSquare} aria-hidden="true" />;
export const close = <FontAwesomeIcon className="text-white" icon={faTimes} aria-hidden="true" />;
export const video = <FontAwesomeIcon className="text-white opacity-60" icon={faVideo} aria-hidden="true" />;
export const github = <FontAwesomeIcon className="text-white" icon={faGithub} aria-hidden="true" />;
export const imgIcon = <FontAwesomeIcon className="text-white" icon={faImages} aria-hidden="true" />;
export const bugIcon = <FontAwesomeIcon className="text-white" icon={faBug} aria-hidden="true" />;
export const bookmarkIcon = <FontAwesomeIcon className="text-white" icon={faBookmark} aria-hidden="true" />;
export const arrowdown = <FontAwesomeIcon className="text-white" icon={faSortDown} aria-hidden="true" />;
export const arrowup = <FontAwesomeIcon className="text-white" icon={faSortUp} aria-hidden="true" />;
