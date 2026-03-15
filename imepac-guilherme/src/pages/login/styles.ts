import { StyleSheet } from "react-native";
import { palette } from "../../global/themas";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background,
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    wrapper: { // ou card
        width: "100%",
        backgroundColor: palette.surface,
        padding: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: palette.textPrimary,
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: palette.textSecondary,
        textAlign: "center",
        marginBottom: 30,
    },
    controlContainer: { // ou inputContainer
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 55,
    },
    control: { // ou input
        flex: 1,
        height: "100%",
        marginLeft: 10,
        color: palette.textPrimary,
    },
    action: { // ou button
        backgroundColor: palette.primary,
        height: 55,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    actionText: { // ou buttonText
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    secondaryAction: {
        marginTop: 20,
        alignItems: "center",
    },
    secondaryText: { // ou link
        color: palette.primary,
        fontWeight: "600",
    }
});