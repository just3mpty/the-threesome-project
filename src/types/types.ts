interface CupProps {
    result: string;
    isGameActive: boolean;
    onCupClick: () => void;
    index: number;
    cupRefs: React.RefObject<HTMLDivElement[]>;
}

export type { CupProps };
