CREATE TABLE public.message (
        id uuid NOT NULL,
        createdat timestamp without time zone,
        createdby character varying(256),
        content character varying(10000)
);

