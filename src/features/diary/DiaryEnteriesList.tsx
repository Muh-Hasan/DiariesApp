import React, { FC, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import http from '../../server/api';
import { Entry } from '../../interface/entry.interface';
import { setEntries } from '../entry/entriesSlice';
import { setCurrentlyEditing, setCanEdit } from '../entry/editorSlice';
import moment from 'moment'
import { useAppDispatch } from '../../store';

const DiaryEntriesList: FC = () => {
  const { entries } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id != null) {
      http
        .get<null, { entries: Entry[] }>(`/diaries/entries/${id}`)
        .then(({ entries: _entries }) => {
          if (_entries) {
            const sortByLastUpdated = _entries.sort((a, b) => {
              return moment(b.updatedAt).unix() - moment(a.updatedAt).unix();
            });
            dispatch(setEntries(sortByLastUpdated));
          }
        });
    }
  }, [id, dispatch]);

  return (
    <div className="entries">
      <header>
        <Link to="/">
          <h3>← Go Back</h3>
        </Link>
      </header>
      <ul>
        {entries.map((entry) => (
          <li
            key={entry.id}
            onClick={() => {
              dispatch(setCurrentlyEditing(entry));
              dispatch(setCanEdit(true));
            }}
          >
            {entry.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryEntriesList;
