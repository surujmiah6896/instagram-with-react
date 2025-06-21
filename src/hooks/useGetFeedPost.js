import { useEffect, useState } from "react";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import postStore from "../store/postStore";
import UseAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useGetFeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { posts, setPosts } = postStore();
	const authUser = UseAuthStore((state) => state.user);
	const Toast = useShowToast();
	const { setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getFeedPosts = async () => {
			setIsLoading(true);
			if (authUser.following.length === 0) {
				setIsLoading(false);
				setPosts([]);
				return;
			}
			const q = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following));
			try {
				const querySnapshot = await getDocs(q);
				const feedPosts = [];

				querySnapshot.forEach((doc) => {
					feedPosts.push({ id: doc.id, ...doc.data() });
				});

				feedPosts.sort((a, b) => b.createdAt - a.createdAt);
				setPosts(feedPosts);
			} catch (error) {
				Toast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getFeedPosts();
	}, [authUser, Toast, setPosts, setUserProfile]);

	return { isLoading, posts };
};

export default useGetFeedPosts;
